import Bcrypt from 'bcryptjs';
import 'dotenv/config';

export default class BcryptUtil {
  private helper: typeof Bcrypt;

  constructor() {
    this.helper = Bcrypt;
  }

  public createHash = (password: string):
  string => {
    const SALT = 1;
    const hash = this.helper.hashSync(password, SALT);
    return hash;
  };

  public validateHash = (password: string, hash: string):
  boolean => {
    const isHashValid = this.helper.compareSync(password, hash);
    return isHashValid;
  };
}
