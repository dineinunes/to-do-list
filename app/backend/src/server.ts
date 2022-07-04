import App from './app';
import 'dotenv/config';

const SERVER_PORT = process.env.SERVER_PORT || 3001;

new App().start(SERVER_PORT);
