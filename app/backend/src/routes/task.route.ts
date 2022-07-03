import { Router } from 'express';
import TaskController from '../controllers/task.controller';

const task = Router();

const controller = new TaskController();

task.get('/', controller); // get all tasks
task.post('/'); // create new task
task.put('/'); // update general informations of a task
task.put('/'); // update status of a task
task.delete('/'); // delete a task

export default task;
