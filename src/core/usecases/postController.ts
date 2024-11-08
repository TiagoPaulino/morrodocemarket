
import Post from "../entity/post";
import { PostRepository } from "../interfaces/postRepository"
class PostController implements PostRepository {
    Controller: PostRepository
    constructor(Controller: PostRepository){ 
        this.Controller = Controller;
    }
    async removePost(id: string): Promise<void> {
        this.Controller.removePost(id)
    }
    async updatePost(post: Post): Promise<void> {
       this.Controller.updatePost(post)
    }
    async getPosts(): Promise<Post[]> {
        return this.Controller.getPosts()
    }
    async getPostById(id: string): Promise<Post | null> {
        return this.Controller.getPostById(id)
    }
    async createPost(post: Post): Promise<Post | null> {
        return this.Controller.createPost(post)
    }

}

export default PostController