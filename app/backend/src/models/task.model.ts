import {
  isValidObjectId, model, Model, UpdateQuery,
} from 'mongoose';
import ITask from './interfaces/task.interface';
import taskSchema from './schemas/task.schema';

export default class TaskModel {
  private database: Model<ITask>;

  constructor() {
    this.database = model<ITask>('tasks', taskSchema);
  }

  public async createTask(user: string, data: ITask): Promise<ITask> {
    const { description, status } = data;
    const newTask = await this.database.create({ user, description, status });
    return newTask;
  }

  public async getAllTasks(user: string): Promise<ITask | ITask[] | null> {
    const allTasks = await this.database.find({ user });
    return allTasks;
  }

  public async updateTask(id: string, data: UpdateQuery<ITask>): Promise<ITask | null> {
    if (!isValidObjectId(id)) return null;
    const updatedTask = await this.database
      .findOneAndUpdate({ _id: id }, data, { returnOriginal: false });
    return updatedTask;
  }

  public async updateStatus(id: string, status: UpdateQuery<ITask>): Promise<ITask | null> {
    if (!isValidObjectId(id)) return null;
    const updatedTask = await this.database
      .findOneAndUpdate({ _id: id }, { status }, { returnOriginal: false });
    return updatedTask;
  }

  public async deleteTask(id: string): Promise<void> {
    if (!isValidObjectId(id)) return;
    await this.database.deleteOne({ _id: id });
  }

  public async deleteAllTasks(user: string): Promise<void> {
    await this.database.deleteMany({ user });
  }
}
