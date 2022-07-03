import { Router } from 'express';

const task = Router();

task.get('/'); // get all tasks
task.post('/'); // create new task
task.put('/'); // update general informations of a task
task.put('/'); // update status of a task
task.delete('/'); // delete a task

export default task;
