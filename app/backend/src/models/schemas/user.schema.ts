import { Schema } from 'mongoose';
import IUser from '../interfaces/user.interface';

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default userSchema;
