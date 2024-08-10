import express, { Router } from 'express';
import { GETAllUser } from './user.controller';

const userRouter: Router = express.Router();

userRouter.route('/all-user').get(GETAllUser);

export default userRouter;
