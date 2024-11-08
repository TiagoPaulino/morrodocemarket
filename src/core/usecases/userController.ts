
import UserRepository from "../interfaces/userRepository"
import {User} from "../entity/user"


class UserController implements UserRepository {
    controller: UserRepository
    constructor(controller: UserRepository) {
        this.controller = controller
    }
    async createUser(user: User): Promise<User | null> {
        return this.controller.createUser(user)
    }
    async getUserById(id: string): Promise<User | null> {
        return this.controller.getUserById(id)
    }
    async getUserByUsername(username: string): Promise<User | null> {
        return this.controller.getUserByUsername(username)
    }
    async updateUser(user: User): Promise<void> {
        this.controller.updateUser(user)
    }
    async removeUser(id: string): Promise<void> {
        this.controller.removeUser(id)
    }
    async checkUserMail(email: string): Promise<boolean | null | void> {
        return this.controller.checkUserMail(email)
    }

}

export default UserController