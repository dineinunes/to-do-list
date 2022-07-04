import Bcrypt from 'bcryptjs';

export default class UBcrypt {
  private SALT = 1;

  public createHash = (password: string):
  string => Bcrypt.hashSync(
    password,
    this.SALT,
  );

  static validateHash = (password: string, hash: string):
  boolean => Bcrypt.compareSync(
    password,
    hash,
  );
}
