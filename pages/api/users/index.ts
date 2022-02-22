// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface ICreateUserBody {
  email: string;
  firstName: string;
  lastName: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;

  const { email, firstName, lastName } = body as ICreateUserBody;

  res.status(200).json({ email, firstName, lastName });
}
