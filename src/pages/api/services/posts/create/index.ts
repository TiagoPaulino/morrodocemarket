
import { createPost } from "@/lib/mongodb/metods/post";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
    if (!req.body) {
        res.status(400).json({ error: 'Missing body' })
    }
    try{
        await createPost(req.body)
        res.status(200).json({ message: 'Post created successfully' })       
    }
    catch (error) {
        console.error("Database connection error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}