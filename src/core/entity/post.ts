class Post {
    id: string;
    title: string;
    content: string;
    date: string | Date;

    constructor(id: string, title: string, content: string) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.date = new Date().toISOString();
    }
}
export default Post