import { StatusCodes } from 'http-status-codes';
import { UpdateQuery } from 'mongoose';
import IMessage from '../models/interfaces/message.interface';
import IToken from '../models/interfaces/token.interface';
import IUser from '../models/interfaces/user.interface';
import UserModel from '../models/user.model';
import BcryptUtil from '../utils/bcrypt.util';
import JwtUtil from '../utils/jwt.util';

export default class UserService {
  private model: UserModel;

  private util: BcryptUtil;

  private util2: JwtUtil;

  constructor() {
    this.model = new UserModel();
    this.util = new BcryptUtil();
    this.util2 = new JwtUtil();
  }

  public createUser = async (data: IUser):
  Promise<[StatusCodes, IMessage]> => {
    const user = await this.model.usernameMatch(data.username);
    if (user === null) {
      const hash = this.util.createHash(data.password);
      await this.model.insertUser(data.username, hash);
      return [StatusCodes.CREATED, { message: 'User created' }];
    }
    return [StatusCodes.UNPROCESSABLE_ENTITY, { message: 'Username already in use' }];
  };

  public deleteUser = async (username: string):
  Promise<[StatusCodes, IMessage]> => {
    await this.model.deleteUser(username);
    return [StatusCodes.NO_CONTENT, { message: 'User deleted' }];
  };

  public updateUser = async (username: string, data: UpdateQuery<IUser>):
  Promise<[StatusCodes, IMessage]> => {
    await this.model.updateUser(username, data);
    return [StatusCodes.OK, { message: 'User informations updated' }];
  };

  public userLogin = async (data: IUser):
  Promise<[StatusCodes, IMessage | IToken]> => {
    const user = await this.model.usernameMatch(data.username);
    if (user) {
      const isPasswordValid = this.util.validateHash(data.password, user.password);
      if (isPasswordValid) {
        const token = await this.util2.generateToken(user.username);
        return [StatusCodes.OK, { token }];
      }
      return [StatusCodes.UNAUTHORIZED, { message: 'Invalid password' }];
    }
    return [StatusCodes.UNAUTHORIZED, { message: 'User does not exist' }];
  };
}
