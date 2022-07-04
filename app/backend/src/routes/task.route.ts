import { Router } from 'express';
import TaskController from '../controllers/task.controller';

const task = Router();

const controller = new TaskController();

task.delete('/:user', controller.deleteAllTasks); // delete all tasks
task.get('/:user', controller.getAllTasks); // get all tasks
task.post('/:user', controller.createTask); // create new task
task.put('/:user/:id', controller.updateTask); // update general informations of a task
task.delete('/:user/:id', controller.deleteTask); // delete a task
task.put('/:user/:id/:status', controller.updateStatus); // update status of a task

export default task;
