// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || ''; // Armazene sua string de conexão em uma variável de ambiente
const options = {};


    // Para produção, use um cliente normal
const client = new MongoClient(uri, options);
const clientPromise = client.connect();

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}else{
    console.log("MongoDB Connected")
  console.log(process.env.MONGODB_URI)
}



export default clientPromise;
