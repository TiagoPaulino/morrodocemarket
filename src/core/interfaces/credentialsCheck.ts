

interface CredentialsCheck {
    checkPassword(password: string): Promise<boolean>;
    hashPassword(password: string): Promise<string|null>;
}
export default CredentialsCheck