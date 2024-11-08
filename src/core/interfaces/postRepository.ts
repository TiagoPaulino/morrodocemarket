import Post from "../entity/post";

export interface PostRepository {
    getPosts(): Promise<Post[]>;
    getPostById(id: string): Promise<Post | null>;
    createPost(post: Post): Promise<Post | null>;

    removePost(id: string): Promise<void>;

    updatePost(post: Post): Promise<void>;

}
