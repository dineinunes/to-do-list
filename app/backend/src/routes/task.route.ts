import { Router } from 'express';
import TaskController from '../controllers/task.controller';

const task = Router();

const controller = new TaskController();

task.post('/', controller.deleteAllTasks); // delete all tasks
task.get('/', controller.getAllTasks); // get all tasks
task.post('/', controller.createTask); // create new task
task.put('/:id', controller.updateTask); // update general informations of a task
task.delete('/:id', controller.deleteTask); // delete a task
task.put('/:id/:status', controller.updateStatus); // update status of a task

export default task;
