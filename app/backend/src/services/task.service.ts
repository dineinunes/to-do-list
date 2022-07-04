import { UpdateQuery } from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import ITask from '../models/interfaces/task.interface';
import TaskModel from '../models/task.model';

export default class TaskService {
  private model: TaskModel;

  constructor() {
    this.model = new TaskModel();
  }

  public async createTask(user: string, data: ITask):
  Promise<[StatusCodes, ITask]> {
    console.log(data.description);
    console.log(data.status);
    const newTask = await this.model.createTask(user, data);
    console.log(newTask);
    return [StatusCodes.CREATED, newTask];
  }

  public async getAllTasks(user: string):
  Promise<[StatusCodes, ITask | ITask[] | null]> {
    const allTasks = await this.model.getAllTasks(user);
    return [StatusCodes.OK, allTasks];
  }

  public async updateTask(id: string, data: UpdateQuery<ITask>):
  Promise<[StatusCodes, ITask | null]> {
    const updatedTask = await this.model.updateTask(id, data);
    return [StatusCodes.OK, updatedTask];
  }

  public async updateStatus(id: string, status: UpdateQuery<ITask>):
  Promise<[StatusCodes, ITask | null]> {
    const updatedTask = await this.model.updateStatus(id, status);
    return [StatusCodes.OK, updatedTask];
  }

  public async deleteTask(id: string):
  Promise<[StatusCodes]> {
    await this.model.deleteTask(id);
    return [StatusCodes.NO_CONTENT];
  }

  public async deleteAllTasks(user: string):
  Promise<[StatusCodes]> {
    await this.model.deleteTask(user);
    return [StatusCodes.NO_CONTENT];
  }
}
