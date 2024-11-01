import { Author, Category, Post, Tag, User } from "../interfaces"
import { IManager, IRepository } from "../useCases"


class Repository implements IRepository {

    async getAllPosts(): Promise<Post[]>{
        return []
    }

    async getPosts(): Promise<Post[]> {
        return []
    }

    async getPost(): Promise<Post> {
        return {} as Post
    }

    async getPostsByCategory(): Promise<Post[]> {
        return []
    }

    async getPostsByTag(): Promise<Post[]> {
        return []
    }

    async getPostsByAuthor(): Promise<Post[]> {
        return []
    }

    async getCategories(): Promise<Category[]> {
        return []
    }

    async getTags(): Promise<Tag[]> {
        return []
    }

    async getAuthors(): Promise<Author[]> {
        return []
    }

    
}

class PostManager implements IManager {
    async create(): Promise<void> {
    }

    async update(): Promise<void> {
    }

    async delete(): Promise<void> {
    }

}

class UserManager implements IManager {

    async create(User:User): Promise<void> {
    }

    async update(): Promise<void> {
    }

    async delete(): Promise<void> {
    }
}

export { Repository, PostManager, UserManager }
