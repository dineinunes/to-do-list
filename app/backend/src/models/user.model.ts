import {
  model, Model, UpdateQuery,
} from 'mongoose';
import IUser from './interfaces/user.interface';
import userSchema from './schemas/user.schema';

export default class UserModel {
  private database: Model<IUser>;

  constructor() {
    this.database = model<IUser>('users', userSchema);
  }

  public async insertUser(username: string, password: string):
  Promise<IUser> {
    const newUser = await this.database.create({ username, password });
    return newUser;
  }

  public async deleteUser(username: string):
  Promise<void> {
    await this.database.deleteOne({ username });
  }

  public async usernameMatch(username: string):
  Promise<IUser | null> {
    const user = await this.database.findOne({ username });
    return user;
  }

  public async updateUser(user: string, data: UpdateQuery<IUser>):
  Promise<IUser | null> {
    const updatedUser = await this.database
      .findOneAndUpdate({ user }, data, { returnOriginal: false });
    return updatedUser;
  }
}
