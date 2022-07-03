import { Document } from 'mongoose';

export default interface ITask extends Document {
  id: number,
  createdBy: number,
  description: string,
  status: string,
  createdAt: string,
  updatedAt: string,
}
