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
  const { body, method } = req;

  if (method === "POST") {
    try {
      const { email, firstName, lastName } = body as ICreateUserBody;

      await db();

      const hasUser = await User.findOne({ email: email });

      if (hasUser) throw new Error("User already exists");

      const newUser = await User.create({ email, firstName, lastName });

      res.status(200).json({ data: newUser, error: null });
    } catch (e: any) {
      res.status(400).json({
        data: null,
        error: e.message,
      });
    }
  }

  return res.status(500).json("Method not accepted");
}
