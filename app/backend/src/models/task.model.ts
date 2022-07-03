import { model, Model } from 'mongoose';
import ITask from './interfaces/task.interface';
import taskSchema from './schemas/task.schema';

export default class TaskModel {
  private taskMongooseModel: Model<ITask>;

  constructor() {
    this.taskMongooseModel = model<ITask>('tasks', taskSchema);
  }
}
