import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
import 'dotenv/config';

export default class JwtUtil {
  private helper: typeof jwt;

  private JWT_SECRET: string;

  constructor() {
    this.helper = jwt;
    this.JWT_SECRET = process.env.JWT_SECRET
    || '3trxFjZpELIV2wsAerRHp5eD0sPboZwnGEOJ0B0kHlNim8g79S0Z1uCmECxC5P7';
  }

  public generateToken = async (user: string):
  Promise<string> => {
    const token = this.helper.sign(user, this.JWT_SECRET, { algorithm: 'HS256' });
    return token;
  };

  public validateToken = async (token: string | undefined):
  Promise<string | JwtPayload | number> => {
    if (token) {
      try {
        const user = jwt.verify(
          token,
          this.JWT_SECRET,
        );
        return user;
      } catch (error) {
        return 401;
      }
    }
    return 401;
  };
}
