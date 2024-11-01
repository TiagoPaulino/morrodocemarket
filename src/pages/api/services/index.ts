// pages/api/servicos.ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const client = await clientPromise;
        const db = client.db('morrodocemarketdb'); // Substitua pelo seu nome de banco de dados
    
        if (req.method === 'GET') {
            const servicos = await db.collection('posts').find({}).toArray();
            console.log(servicos);
            res.status(200).json(servicos);
        } else {
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
