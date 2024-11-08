
import { NextApiRequest, NextApiResponse } from "next";
import {DatabaseUserController} from "@/infra/database"
import {PasswordController} from "@/infra/auth/";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
    if (!req.body) {
        res.status(400).json({ error: 'Missing body' })
    }
    try{
        const { username, password, email} = req.body.userData;
        console.log("Recebido o body", username, password, email);
        const emailInUse = await DatabaseUserController.checkUserMail(email)
        console.log("Verificado se o e-mail esta em uso", emailInUse);
        if(!emailInUse){
            const hashedPassword = await PasswordController.hashPassword(password) as string;
            console.log("Hashed password", hashedPassword);
            await DatabaseUserController.createUser({username, password: hashedPassword, email});
            console.log("User created");
            /* await createUser(username, password); */
            res.status(200).json({ message: 'User created successfully' })
        }else{
            res.status(400).json({ error: 'Email in use' })
        }
       
    }
    catch (error) {
        console.error("Database connection error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}