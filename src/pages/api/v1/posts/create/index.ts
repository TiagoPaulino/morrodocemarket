import PostController from "@/core/usecases/postController";
import PostContollerMongoDb from "@/lib/mongodb/controllers/PostController";;
import authMiddleware from "@/pages/auth";

import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  if (!req.body) {
    res.status(400).json({ error: "Missing body" });
  }
  try {
    await new PostController(new PostContollerMongoDb()).createPost(
      req.body.postDatas
    );
    res.status(200).json({ message: "Post created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
export default authMiddleware(handler);
