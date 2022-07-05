import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import JwtUtil from '../utils/jwt.util';

export default class AuthMiddleware {
  private util: JwtUtil;

  constructor() {
    this.util = new JwtUtil();
  }

  public userAuthenticate = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const { authorization } = req.headers;
      const { user } = req.params;
      const [code, result] = await this.util.validateToken(authorization);
      if (StatusCodes.CONTINUE && result === user) {
        return next();
      }
      return res.status(code).json(result);
    } catch (error) {
      return next(error);
    }
  };
}
