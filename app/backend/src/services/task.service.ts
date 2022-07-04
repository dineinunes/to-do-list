import { UpdateQuery } from 'mongoose';
import ITask from '../models/interfaces/task.interface';
import TaskModel from '../models/task.model';

export default class TaskService {
  private model: TaskModel;

  constructor() {
    this.model = new TaskModel();
  }

  public async createTask(data: ITask):
  Promise<number> {
    await this.model.createTask(data);
    return 201;
  }

  public async getAllTasks(user: string):
  Promise<number> {
    await this.model.getAllTasks(user);
    return 200;
  }

  public async updateTask(id: string, data: UpdateQuery<ITask>):
  Promise<number> {
    await this.model.updateTask(id, data);
    return 200;
  }

  public async updateStatus(id: string, status: UpdateQuery<ITask>):
  Promise<number> {
    await this.model.updateStatus(id, status);
    return 200;
  }

  public async deleteTask(id: string):
  Promise<number> {
    await this.model.deleteTask(id);
    return 204;
  }

  public async deleteAllTasks(user: string):
  Promise<number> {
    await this.model.deleteTask(user);
    return 204;
  }
}
