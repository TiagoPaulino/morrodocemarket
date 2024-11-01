import { Post, Category, Tag, Author } from "./interfaces";

interface IRepository {
    getAllPosts: () => Promise<Post[]>;
    getPost: (slug: string) => Promise<Post>;
    getPostsByCategory: (category: string) => Promise<Post[]>;
    getPostsByTag: (tag: string) => Promise<Post[]>;
    getPostsByAuthor: (author: string) => Promise<Post[]>;
    getCategories: () => Promise<Category[]>;
    getTags: () => Promise<Tag[]>;
    getAuthors: () => Promise<Author[]>;
}
interface IManager {
    create(any: any): void;
    update(id: string): void;
    delete(id: string): void;
}

export type { IRepository, IManager };