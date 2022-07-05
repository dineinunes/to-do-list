import { Router } from 'express';
import TaskController from '../controllers/task.controller';
import AuthMiddleware from '../middlewares/auth.middleware';

const task = Router();

const controller = new TaskController();
const middleware = new AuthMiddleware();

task.delete('/:user', middleware.userAuthenticate, controller.deleteAllTasks);
task.get('/:user', middleware.userAuthenticate, controller.getAllTasks);
task.post('/:user', middleware.userAuthenticate, controller.createTask);
task.put('/:user/:id', middleware.userAuthenticate, controller.updateTask);
task.delete('/:user/:id', middleware.userAuthenticate, controller.deleteTask);
task.put('/:user/:id/:status', middleware.userAuthenticate, controller.updateStatus);

export default task;
