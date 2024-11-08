import CredentialsCheck from '@/core/interfaces/credentialsCheck';
import bcrypt from 'bcrypt';


class passwordControllerBcrypt implements CredentialsCheck{
    async checkPassword(password: string): Promise<boolean> {
        try{
            await bcrypt.compare(password, password);
            return true;
        }catch(error){
            return false;
        }
    }
    async hashPassword(password: string): Promise<string | null> {
        try{
            return bcrypt.hash(password, 10);
        }catch(error){
            return null;
        }
    }
}

export default passwordControllerBcrypt