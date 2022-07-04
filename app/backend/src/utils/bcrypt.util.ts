import Bcrypt from 'bcryptjs';

export default class BcryptUtil {
  private SALT = 1;

  public createHash = (password: string):
  string => Bcrypt.hashSync(
    password,
    this.SALT,
  );

  // eslint-disable-next-line class-methods-use-this
  public validateHash = (password: string, hash: string):
  boolean => Bcrypt.compareSync(
    password,
    hash,
  );
}
