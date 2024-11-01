import { createUser } from "@/lib/mongodb/metods/user";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
    if (!req.body) {
        res.status(400).json({ error: 'Missing body' })
    }
    try{
        // Implemente aqui o código para criar o usuário no banco de dados
        const { username, password } = req.body;
        await createUser(username, password);
        res.status(200).json({ message: 'User created successfully' })
    }
    catch (error) {
        console.error("Database connection error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}