import { Request, Response, NextFunction } from 'express';
import JwtUtil from '../utils/jwt.util';

export default class AuthMiddleware {
  private util: JwtUtil;

  constructor() {
    this.util = new JwtUtil();
  }

  public async userAuthenticate(req: Request, _res: Response, next: NextFunction):
  Promise<void> {
    try {
      const { authorization } = req.headers;
      const { user } = req.params;
      const username = await this.util.validateToken(authorization);
      if (username === user) {
        return next();
      }
      return next();
    } catch (error) {
      return next(error);
    }
  }
}
