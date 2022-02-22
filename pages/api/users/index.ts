// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../src/database";
import { User } from "../../../src/database/Models/User";

const apiKey = process.env.API_KEY;

interface ICreateUserBody {
  email: string;
  firstName: string;
  lastName: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method, query, headers } = req;

  if (method === "POST") {
    try {
      const { api_key } = headers;
      if (!api_key) throw new Error("No API Key provided");
      if (api_key !== apiKey) throw new Error("Invalid API Key");

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

  if (method === "GET") {
    try {
      const { email } = query;
      if (!email) throw new Error("No email provided");

      const user = await User.findOne({ email });
      if (!user) throw new Error("User dos not exist");

      res.status(200).json({ data: user, error: null });
    } catch (e: any) {
      res.status(400).json({
        data: null,
        error: e.message,
      });
    }
  }

  return res.status(500).json("Method not accepted");
}
