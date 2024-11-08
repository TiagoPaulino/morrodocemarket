import { validateUser } from "@/lib/mongodb/metods/user";
import { generateToken, verifyToken } from "@/utils/jwt";
import { NextApiRequest, NextApiResponse,  } from "next";
import { redirect } from "next/dist/server/api-utils";



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
        //validar se usuário existe
        const user = await validateUser(username, password);
        if(!user) {
            return res.status(401).json({ error: 'User not found' });
        }
        //gerar token
        const token = generateToken(user.username);
        //seta o cookie no header
        res.setHeader('Set-Cookie',
            "token=" + token + ";" + "Max-Age=" + 3600 + ";" + "path=/");
        //retorna a desposta de sucesso
        res.status(200).json({ message: 'User Validated successfully', token });
        
    }
    catch (error) {
        console.error("Database connection error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}