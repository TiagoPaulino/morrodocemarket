import clientPromise from "../../mongodb";
import {v4 as uuid} from 'uuid'
import bcrypt from 'bcrypt';

export interface User {
    username: string;
    password: string;
    id: string;
}

export async function createUser(username: string, password: string) {
    const client = await clientPromise;
    const db = client.db('morrodocemarketdb'); 
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const user: User = {
            username,
            password: hashedPassword,
            id: uuid(),
             }  
        const result = await db.collection('users').insertOne(user);
        return result;
    }catch (error) {
        console.error("Database connection error:", error);
        return null;
    }
}

export async function validateUser(username: string, password: string) {
    const client = await clientPromise;
    const db = client.db('morrodocemarketdb'); 
    try{
        const user = await db.collection('users').findOne({ username });
        if (!user) return null;
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return null;
        return user;
    }catch (error) {
        console.error("Database connection error:", error);
        return null;
    }
}