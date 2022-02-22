// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../src/database";
import { User } from "../../../src/database/Models/User";

interface ICreateUserBody {
  email: string;
  firstName: string;
  lastName: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await db();

  const { body } = req;

  const { email, firstName, lastName } = body as ICreateUserBody;

  const newUser = await User.create({ email, firstName, lastName });

  res.status(200).json({ newUser });
}
