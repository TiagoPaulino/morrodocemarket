

import { Post } from "@/core/interfaces";
import clientPromise from "../../mongodb";
import {v4 as uuid} from 'uuid'

export async function getPosts() {
    const client = await clientPromise;
    const db = client.db('morrodocemarketdb'); 
    try{
        const posts = await db.collection('posts').find({}).toArray();
        return posts;
    }catch (error) {
        console.error("Database connection error:", error);
        return [];
    }
} 

export async function getPostById(id: string) {
    const client = await clientPromise;
    const db = client.db('morrodocemarketdb'); 
    try{
        const post = await db.collection('posts').findOne({ id });
        return post;
    }catch (error) {
        console.error("Database connection error:", error);
        return null;
    }
}
export async function createPost(post: Post) {
    const client = await clientPromise;
    const db = client.db('morrodocemarketdb'); 
    try{
        post.id = uuid();
        post.date = new Date().toISOString();
        const result = await db.collection('posts').insertOne(post);
        return result;
    }catch (error) {
        console.error("Database connection error:", error);
        return null;
    }
}

function uploadImage(coverImage: string): string | PromiseLike<string> {
    throw new Error("Function not implemented.");
}
