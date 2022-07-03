import express from 'express';
import MongoConnection from './models/mongo.connection';

export default class App {
  private app: express.Express;

  private database;

  constructor() {
    this.app = express();
    this.config();
    this.connection();
    this.database = MongoConnection;
  }

  private config(): void {
    this.app.use(express.json());
  }

  private connection(): void {
    this.database.connect();
  }

  public start(port: string) {
    this.app.listen(port, () => console.log(`Server is running at port ${port}`));
  }
}
