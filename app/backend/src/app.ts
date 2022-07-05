import express from 'express';
import MongoConnection from './models/mongo.connection';
import 'dotenv/config';
import routes from './routes';

export default class App {
  private app: express.Express;

  private DB_HOST: string;

  constructor() {
    this.app = express();
    this.config();
    this.DB_HOST = process.env.DB_HOST || 'localhost:27017';
    this.routes();
  }

  private config = ():
  void => {
    this.app.use(express.json());
  };

  private connection = async ():
  Promise<void> => {
    await MongoConnection.connect(`mongodb://${this.DB_HOST}:/todolist`);
  };

  private routes = ():
  void => {
    this.app.use('/task', routes.task);
    this.app.use('/user', routes.user);
  };

  public start = (port: string | number):
  void => {
    this.connection();
    this.app.listen(port, () => console.log(`Server is running at port ${port}`));
  };
}
