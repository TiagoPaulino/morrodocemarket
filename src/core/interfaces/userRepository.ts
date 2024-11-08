
import {User} from "../entity/user"
interface UserRepository {
    createUser(user: User): Promise<User | null>
    getUserById(id: string): Promise<User | null>
    getUserByUsername(username: string): Promise<User | null>
    updateUser(user: User): Promise<void>
    removeUser(id: string): Promise<void>
    checkUserMail(email: string): Promise<boolean | void | null>

}

export default UserRepository
