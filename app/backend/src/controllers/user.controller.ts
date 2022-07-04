import { Request, Response, NextFunction } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public createUser = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const data = req.body;
      const [code, message] = await this.service.createUser(data);
      return res.status(code).json(message);
    } catch (error) {
      return next(error);
    }
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const { authorization } = req.headers;
      const { user } = req.params;
      const [code, message] = await this.service.deleteUser(user, authorization);
      return res.status(code).json(message);
    } catch (error) {
      return next(error);
    }
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const data = req.body;
      const { authorization } = req.headers;
      const { user } = req.params;
      const [code, message] = await this.service.updateUser(user, data, authorization);
      return res.status(code).json(message);
    } catch (error) {
      return next(error);
    }
  };

  public userLogin = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const data = req.body;
      const [code, result] = await this.service.userLogin(data);
      return res.status(code).json(result);
    } catch (error) {
      return next(error);
    }
  };
}
