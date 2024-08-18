import { NextApiRequest, NextApiResponse } from "next";
import db from "@/lib/db";
import getSession from "@/lib/session";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const session = await getSession();
      if (!session || !session.id) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const { title, description } = req.body;
      const newPost = await db.post.create({
        data: {
          title,
          description,
          userId: session.id,
        },
      });

      return res.status(201).json(newPost);
    } catch (error) {
      console.error("Failed to create post:", error);
      return res.status(500).json({ error: "Failed to create post" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

