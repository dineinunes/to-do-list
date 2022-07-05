import { UpdateQuery } from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import ITask from '../models/interfaces/task.interface';
import TaskModel from '../models/task.model';

export default class TaskService {
  private model: TaskModel;

  constructor() {
    this.model = new TaskModel();
  }

  public createTask = async (user: string, data: ITask):
  Promise<[StatusCodes, ITask]> => {
    const newTask = await this.model.createTask(user, data);
    return [StatusCodes.CREATED, newTask];
  };

  public getAllTasks = async (user: string):
  Promise<[StatusCodes, ITask | ITask[] | null]> => {
    const allTasks = await this.model.getAllTasks(user);
    return [StatusCodes.OK, allTasks];
  };

  public updateTask = async (id: string, data: UpdateQuery<ITask>):
  Promise<[StatusCodes, ITask | null]> => {
    const updatedTask = await this.model.updateTask(id, data);
    return [StatusCodes.OK, updatedTask];
  };

  public updateStatus = async (id: string, status: string):
  Promise<[StatusCodes, ITask | null]> => {
    const updatedTask = await this.model.updateStatus(id, status);
    return [StatusCodes.OK, updatedTask];
  };

  public deleteTask = async (id: string):
  Promise<[StatusCodes]> => {
    await this.model.deleteTask(id);
    return [StatusCodes.NO_CONTENT];
  };

  public deleteAllTasks = async (user: string):
  Promise<[StatusCodes]> => {
    await this.model.deleteAllTasks(user);
    return [StatusCodes.NO_CONTENT];
  };
}
