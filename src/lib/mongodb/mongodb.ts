// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || ''; // Armazene sua string de conexão em uma variável de ambiente


    // Para produção, use um cliente normal
const client = new MongoClient(uri);
const clientPromise = client.connect();


if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}else{
    console.log("MongoDB Connected")
    /* console.log(process.env.MONGODB_URI) */
}
export const mongoClient = await clientPromise;
export const database =  mongoClient.db(process.env.DATABASE_NAME);


export default clientPromise;
