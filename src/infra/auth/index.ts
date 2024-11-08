import passwordControllerBcrypt from "@/lib/bcrypt"
import CredentialsController from "@/core/usecases/credentialsController"

export const PasswordController = new CredentialsController(new passwordControllerBcrypt())