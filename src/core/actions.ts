
class Post {

    constructor(
        public id: string,
        public title: string,
        public content: string,
        public slug: string,
        public date: string,
        public description: string,
        public coverImage: string,
        public ogImage: string,
        public author: Author,
        public categories: Category[] | [],
        public tags: Tag[] | []
    ) {

    }
    
}

class Author {

    constructor(
        public name: string,
        public picture: string,
        public id: string,
        public posts: Post[] 
    ) {

    }
}

class Tag {

    constructor(
        public id: string,
        public name: string,
        public description: string
    ) {

    }
}

class Category {

    constructor(
        public id: string,
        public name: string,
        public description: string
    ) {

    }
}

export { Post, Author, Tag, Category }