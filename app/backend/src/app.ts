import express from 'express';
import MongoConnection from './models/mongo.connection';
import 'dotenv/config';

export default class App {
  private app: express.Express;

  private database;

  constructor() {
    this.app = express();
    this.config();
    this.connection();
    this.database = MongoConnection;
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
  }

  private connection(): void {
    this.database.connect(process.env.MONGO_URI);
  }

  private routes() {
    this.app.use('/task');
    this.app.use('/user');
  }

  public start(port: string = '3001') {
    this.app.listen(port, () => console.log(`Server is running at port ${port}`));
  }
}
