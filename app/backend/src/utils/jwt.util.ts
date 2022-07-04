import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
import 'dotenv/config';

export default class JwtUtil {
  private secret: string;

  constructor() {
    this.secret = process.env.JWT_SECRET
    || 'aRMVFmipbNvKvpWu9Ex6YrbPsJ4qAEvHyQx7cIQtCS3nqW2hh1AEb4gdR2pNTJj';
  }

  public generateToken = async (user: string):
  Promise<string> => jwt.sign(
    user,
    this.secret,
    { algorithm: 'HS256' },
  );

  public validateToken = async (token: string | undefined):
  Promise<string | JwtPayload | number> => {
    if (token) {
      try {
        const user = jwt.verify(
          token,
          this.secret,
        );
        return user;
      } catch (error) {
        return 401;
      }
    }
    return 401;
  };
}
