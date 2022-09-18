import { NextApiRequest, NextApiResponse } from "next";

const Webhooks = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);
  res.status(200).json({ message: "Hello" });
};

export default Webhooks;
