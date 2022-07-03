import { Router } from 'express';

const user = Router();

user.post('/'); // create new user
user.post('/'); // log in a user
user.put('/'); // update informations of a user
user.delete('/'); // delete a user

export default user;
