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

  public insertUser = async (username: string, password: string):
  Promise<IUser> => {
    const newUser = await this.database.create({ username, password });
    return newUser;
  };

  public deleteUser = async (username: string):
  Promise<void> => {
    await this.database.deleteOne({ username });
  };

  public usernameMatch = async (username: string):
  Promise<IUser | null> => {
    const user = await this.database.findOne({ username });
    return user;
  };

  public updateUser = async (user: string, data: UpdateQuery<IUser>):
  Promise<IUser | null> => {
    const updatedUser = await this.database
      .findOneAndUpdate({ user }, data, { returnOriginal: false });
    return updatedUser;
  };
}
