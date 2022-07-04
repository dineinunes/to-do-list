import { UpdateQuery } from 'mongoose';
import IUser from '../models/interfaces/user.interface';
import UserModel from '../models/user.model';

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async createUser(data: IUser): Promise<IUser | undefined> {
    const isUsernameInUse = await this.model.usernameMatch(data.username);
    if (isUsernameInUse !== null) {
      return undefined;
    }
    const newUser = await this.model.insertUser(data);
    return newUser;
  }

  public async deleteUser(username: string): Promise<void> {
    await this.model.deleteUser(username);
  }

  public async updateUser(id: string, data: UpdateQuery<IUser>): Promise<IUser | null> {
    const updatedUser = await this.model.updateUser(id, data);
    return updatedUser;
  }

  public async userLogin(): Promise<void> {
    throw new Error('Method not implemented');
  }
}
