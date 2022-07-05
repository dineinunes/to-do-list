import { Schema } from 'mongoose';
import ITask from '../interfaces/task.interface';

const taskSchema = new Schema<ITask>(
  {
    user: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default taskSchema;
