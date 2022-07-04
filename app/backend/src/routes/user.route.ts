import { Router } from 'express';
import UserController from '../controllers/user.controller';

const user = Router();

const controller = new UserController();

user.post('/register', controller.createUser); // create new user
user.post('/login', controller.userLogin); // log in an user
user.put('/:user', controller.updateUser); // update informations of an user
user.delete('/:user', controller.deleteUser); // delete an user

export default user;
