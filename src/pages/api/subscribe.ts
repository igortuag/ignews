import { NextApiRequest, NextApiResponse } from "next";
import { query as q } from "faunadb";
import { getSession } from "next-auth/react";
import { fauna } from "../../services/fauna";
import { stripe } from "../../services/stripe";

const Subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const session = await getSession({ req });

    const user = await fauna.query(
      q.Get(q.Match(q.Index("user_by_email"), q.Casefold(session.user.email)))
    );

    const stripeCustomer = await stripe.customers.create({
      email: session.user.email,
    });

    await fauna.query(
      q.Update(
        q.Select(
          "ref",
          q.Get(
            q.Match(q.Index("user_by_email"), q.Casefold(session.user.email))
          )
        ),
        {
          data: {
            stripe_customer_id: stripeCustomer.id,
          },
        }
      )
    );

    const { priceId } = req.body;

    try {
      const stripeCheckoutSession = await stripe.checkout.sessions.create({
        customer: stripeCustomer.id,
        payment_method_types: ["card"],
        billing_address_collection: "required",
        line_items: [{ price: priceId, quantity: 1 }],
        mode: "subscription",
        allow_promotion_codes: true,
        success_url: process.env.STRIPE_SUCCESS_URL,
        cancel_url: process.env.STRIPE_CANCEL_URL,
      });

      return res.status(201).json({ sessionId: stripeCheckoutSession.id });
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};

export default Subscribe;
