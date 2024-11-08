import PostController from "@/core/usecases/postController";
import UserController from "@/core/usecases/userController";
import PostContollerMongoDb from "@/lib/mongodb/controllers/PostController";
import UserControllerMongoDb from "@/lib/mongodb/controllers/UserController";

export const DatabaseUserController = new UserController(new UserControllerMongoDb())
export const DatabasePostController = new PostController(new PostContollerMongoDb())