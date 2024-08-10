import express, { Router } from 'express';
import userRouter from '../modules/user/user.routes';
import orderRouter from '../modules/order/order.routes';
const globalRouter: Router = express.Router();

const routers = [
  {
    path: '/users',
    router: userRouter
  },
  {
    path: '/orders',
    router: orderRouter
  }
];

routers.forEach((route) => globalRouter.use(route.path, route.router));
export default globalRouter;
