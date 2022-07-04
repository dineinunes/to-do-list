import express from 'express';
import MongoConnection from './models/mongo.connection';
import 'dotenv/config';
import routes from './routes';

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
    this.app.use('/', routes.user);
    this.app.use('/task', routes.task);
  }

  public start(port = '3001') {
    this.app.listen(port, () => console.log(`Server is running at port ${port}`));
  }
}
