import { Router } from 'express';
import UserController from '../controllers/user.controller';

const user = Router();

const controller = new UserController();

user.post('/'); // create new user
user.post('/'); // log in a user
user.put('/'); // update informations of a user
user.delete('/'); // delete a user

export default user;
