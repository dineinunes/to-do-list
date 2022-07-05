import { Document } from 'mongoose';

export default interface ITask extends Document {
  user: string,
  description: string,
  status: string,
  createdAt: string,
  updatedAt: string,
}
