import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { stripe } from "../../services/stripe";

const Subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { user } = await getSession({ req });

    const stripeCustomer = await stripe.customers.create({
      email: user.email,
    });

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
