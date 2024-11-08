export class User {
    username: string;
    email: string;
    password: string;
    id?: string;

    constructor(username: string, password: string, id: string , email: string) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.id = id;
    }
}