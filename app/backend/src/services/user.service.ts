import { UpdateQuery } from 'mongoose';
import IUser from '../models/interfaces/user.interface';
import UserModel from '../models/user.model';
import BcryptUtil from '../utils/bcrypt.util';

export default class UserService {
  private model: UserModel;

  private util: BcryptUtil;

  constructor() {
    this.model = new UserModel();
    this.util = new BcryptUtil();
  }

  public async createUser(data: IUser):
  Promise<number> {
    const isUsernameInUse = await this.model.usernameMatch(data.username);
    if (isUsernameInUse !== null) {
      return 401;
    }
    const hash = this.util.createHash(data.password);
    await this.model.insertUser(data.username, hash);
    return 201;
  }

  public async deleteUser(username: string):
  Promise<number> {
    await this.model.deleteUser(username);
    return 204;
  }

  public async updateUser(user: string, data: UpdateQuery<IUser>):
  Promise<number> {
    await this.model.updateUser(user, data);
    return 200;
  }

  public async userLogin(data: IUser):
  Promise<number> {
    const user = await this.model.usernameMatch(data.username);
    if (user) {
      const isPasswordValid: boolean = this.util.validateHash(data.password, user.password);
      if (isPasswordValid) {
        return 200;
      }
    }
    return 401;
  }
}
