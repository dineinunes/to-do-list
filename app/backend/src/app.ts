import express from 'express';
import MongoConnection from './models/mongo.connection';
import 'dotenv/config';
import routes from './routes';

export default class App {
  private app: express.Express;

  private host: string;

  constructor() {
    this.app = express();
    this.config();
    this.connection();
    this.host = process.env.DB_HOST || 'localhost:27017';
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
  }

  private async connection(): Promise<void> {
    await MongoConnection.connect(`mongodb://${this.host}/to-do-list`);
  }

  private routes() {
    this.app.use('/', routes.user);
    this.app.use('/:user', routes.task);
  }

  public start(port = '3001') {
    this.app.listen(port, () => console.log(`Server is running at port ${port}`));
  }
}
