import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import IMessage from '../models/interfaces/message.interface';
import 'dotenv/config';

export default class JwtUtil {
  private helper: typeof jwt;

  private JWT_SECRET: string;

  constructor() {
    this.helper = jwt;
    this.JWT_SECRET = process.env.JWT_SECRET
    || '3trxFjZpELIV2wsAerRHp5eD0sPboZwnGEOJ0B0kHlNim8g79S0Z1uCmECxC5P7';
  }

  public generateToken = async (username: string):
  Promise<string> => {
    const token = this.helper.sign(username, this.JWT_SECRET, { algorithm: 'HS256' });
    return token;
  };

  public validateToken = async (token?: string):
  Promise<[StatusCodes, string | JwtPayload | IMessage]> => {
    if (token) {
      try {
        const username = jwt.verify(token, this.JWT_SECRET);
        return [StatusCodes.CONTINUE, username];
      } catch (error) {
        return [StatusCodes.UNAUTHORIZED, { message: 'Invalid token' }];
      }
    }
    return [StatusCodes.UNAUTHORIZED, { message: 'Token not found' }];
  };
}
