import { Schema } from 'mongoose';
import ITask from '../interfaces/task.interface';

const taskSchema = new Schema<ITask>({
  id: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: Number,
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
  createdAt: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: String,
    required: true,
  },
});

export default taskSchema;
