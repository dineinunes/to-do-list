import { model, Model } from 'mongoose';
import IUser from './interfaces/user.interface';
import userSchema from './schemas/user.schema';

export default class UserModel {
  private userMongooseModel: Model<IUser>;

  constructor() {
    this.userMongooseModel = model<IUser>('users', userSchema);
  }
}
