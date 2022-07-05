import { Router } from 'express';
import UserController from '../controllers/user.controller';
import AuthMiddleware from '../middlewares/auth.middleware';

const user = Router();

const controller = new UserController();
const middleware = new AuthMiddleware();

user.post('/register', controller.createUser);
user.post('/login', controller.userLogin);
user.put('/:user', middleware.userAuthenticate, controller.updateUser);
user.delete('/:user', middleware.userAuthenticate, controller.deleteUser);

export default user;
