import Bcrypt from 'bcryptjs';
import 'dotenv/config';

export default class BcryptUtil {
  private helper: typeof Bcrypt;

  private secret: string;

  constructor() {
    this.helper = Bcrypt;
    this.secret = process.env.SALT || '1';
  }

  public createHash = (password: string):
  string => {
    const hash = this.helper.hashSync(password, this.secret);
    return hash;
  };

  public validateHash = (password: string, hash: string):
  boolean => {
    const isHashValid = this.helper.compareSync(password, hash);
    return isHashValid;
  };
}
