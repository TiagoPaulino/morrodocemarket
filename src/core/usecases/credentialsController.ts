import CredentialsCheck from "../interfaces/credentialsCheck"


class CredentialsController implements CredentialsCheck {
    controller: CredentialsCheck
    constructor( controller : CredentialsCheck ) {
        this.controller = controller
    }
    checkPassword(password: string): Promise<boolean> {
        return this.controller.checkPassword(password)
    }
    async hashPassword(password: string): Promise<string | null> {
        return this.controller.hashPassword(password)
    }
}
export default CredentialsController