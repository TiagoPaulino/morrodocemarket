import clientPromise from "@/lib/mongodb/mongodb";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const client = await clientPromise;
        const db = client.db('morrodocemarketdb'); // Substitua pelo seu nome de banco de dados

        if (req.method === 'GET') {
            const posts = await db.collection('posts').find({}).toArray();
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