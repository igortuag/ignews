import { NextApiRequest, NextApiResponse } from "next";

const Subscribe = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      // TODO
      // Save user on FaunaDB

      return res.status(201).json({ ok: true });
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};

export default Subscribe;
