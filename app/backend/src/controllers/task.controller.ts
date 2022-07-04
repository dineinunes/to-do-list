import { Request, Response, NextFunction } from 'express';
import TaskService from '../services/task.service';

export default class TaskController {
  private service: TaskService;

  constructor() {
    this.service = new TaskService();
  }

  public createTask = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const data = req.body;
      const { user } = req.params;
      const [code, result] = await this.service.createTask(user, data);
      return res.status(code).json(result);
    } catch (error) {
      return next(error);
    }
  };

  public getAllTasks = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const { user } = req.params;
      const [code, result] = await this.service.getAllTasks(user);
      return res.status(code).json(result);
    } catch (error) {
      return next(error);
    }
  };

  public updateTask = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const data = req.body;
      const { id } = req.params;
      const [code, result] = await this.service.updateTask(id, data);
      return res.status(code).json(result);
    } catch (error) {
      return next(error);
    }
  };

  public updateStatus = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const status = req.body;
      const { id } = req.params;
      const [code, result] = await this.service.updateStatus(id, status);
      return res.status(code).json(result);
    } catch (error) {
      return next(error);
    }
  };

  public deleteTask = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const { id } = req.params;
      const [code] = await this.service.deleteTask(id);
      return res.status(code).end();
    } catch (error) {
      return next(error);
    }
  };

  public deleteAllTasks = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const { user } = req.params;
      const [code] = await this.service.deleteAllTasks(user);
      return res.status(code).end();
    } catch (error) {
      return next(error);
    }
  };
}
