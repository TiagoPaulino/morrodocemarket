import { PostRepository } from "@/core/interfaces/postRepository";
import clientPromise from "../mongodb";
import Post from "@/core/entity/post";

const client = await clientPromise;
const db = client.db("morrodocemarketdb");

class PostContollerMongoDb implements PostRepository {
  async removePost(id: string): Promise<void> {
    try{
        await db.collection("posts").deleteOne({ id });
    }catch (error) {
        console.error("Database connection error:", error);
    }
  }
  async updatePost(post: Post): Promise<void> {
    try {
      const result = await db
        .collection("posts")
        .updateOne({ id: post.id }, { $set: { title: post.title, content: post.content } });
    } catch (error) {
      console.error("Database connection error:", error);
    }
  }
  async getPosts(): Promise<Post[]> {
    try {
      const posts = await db.collection("posts").find({}).toArray();
      const postsWithId = posts.map((post) => ({
        title: post.title,
        content: post.content,
        date: post.date,
        id: post._id.toString(),
      }));
      return postsWithId;
    } catch (error) {
      console.error("Database connection error:", error);
      return [];
    }
  }
  async getPostById(id: string): Promise<Post | null> {
    try{
        const post = await db.collection('posts').findOne({ id });

        if (!post) {
            return null;
        }
        const postWithId = {
            title: post.title,
            content: post.content,
            date: post.date,
            id: post._id.toString(),
        }
        return postWithId;
    }catch{
        return null;
    }
  }
  async createPost(post: Post): Promise<Post | null> {
    try {
      post.date = new Date().toISOString();
      const result = await db.collection("posts").insertOne(post);
      const postWithId = {
        title: post.title,
        content: post.content,
        date: post.date,
        id: result.insertedId.toString(),
      };
      return postWithId;
    } catch (error) {
      console.error("Database connection error:", error);
      return null;
    }
  }
}

export default PostContollerMongoDb;