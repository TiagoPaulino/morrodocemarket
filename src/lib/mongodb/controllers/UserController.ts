import UserRepository from "@/core/interfaces/userRepository";
import { User } from "@/core/entity/user";
import { database } from "../mongodb";

class UserControllerMongoDb implements UserRepository {
    async createUser(user: User): Promise<User | null> {
        try{
            await database.collection('users').insertOne(user)
            return user
        }
        catch (error) {
            console.error("Database connection error:", error);
            return null;
        }
    }
    async getUserById(id: string): Promise<User | null> {
        try{
            const user = await database.collection('users').findOne({ id })
            return user ? {username: user.username, password: user.password, id: user._id.toString(), email: user.email} : null;
        }catch (error) {
            console.error("Database connection error:", error);
            return null;
        }
    }
    async getUserByUsername(username: string): Promise<User | null> {
        try {
            const user  = await database.collection('users').findOne({ username })
            return user ? {username: user.username, password: user.password, id: user._id.toString(), email: user.email} : null;
        } catch (error) {
            console.error("Database connection error:", error);
            return null;
        }
    }
    async updateUser(user: User): Promise<void> {
        try{
            await database.collection('users').updateOne({ id: user.id }, { $set: { username: user.username, password: user.password } })
        }
        catch (error) {
            console.error("Database connection error:", error);
        }
    }
    async removeUser(id: string): Promise<void> {
        try{
            await database.collection('users').deleteOne({ id })
        }
        catch (error) {
            console.error("Database connection error:", error);
        }
        }
    async checkUserMail(email: string): Promise<boolean | null> {
        try{
            const user = await database.collection('users').findOne({ email })
            console.log("user", user)
            return user ? true : false;
        }
        catch (error) {
            console.error("Database connection error:", error);
            return null;
        }
    }
    }

export default UserControllerMongoDb
