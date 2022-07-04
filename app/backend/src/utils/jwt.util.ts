import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
import 'dotenv/config';

export default class JwtUtil {
  private helper: typeof jwt;

  private secret: string;

  constructor() {
    this.helper = jwt;
    this.secret = process.env.JWT_SECRET
    || '3trxFjZpELIV2wsAerRHp5eD0sPboZwnGEOJ0B0kHlNim8g79S0Z1uCmECxC5P7';
  }

  public generateToken = async (user: string):
  Promise<string> => {
    const token = this.helper.sign(user, this.secret, { algorithm: 'HS256' });
    return token;
  };

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
