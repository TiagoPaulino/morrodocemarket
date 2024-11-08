import clientPromise from "@/lib/mongodb/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

import PostContollerMongoDb  from "@/lib/mongodb/controllers/PostController";
import PostController from "@/core/usecases/postController";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const postController = new PostController(new PostContollerMongoDb());
        if (req.method === 'GET') {
            const posts = await postController.getPosts();
            res.status(200).json(posts);
        } else {
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
}