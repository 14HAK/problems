import express, { Router } from 'express';
import userRouter from '../modules/user/user.routes';
import orderRouter from '../modules/order/order.routes';
import productRouter from '../modules/product/product.routes';
import reviewRouter from '../modules/review/review.routes';
import categoryRouter from '../modules/category/category.routes';
import transactionRouter from '../modules/transaction/transaction.routes';
import locationRouter from '../modules/location/location.routes';
import blogRouter from '../modules/blog/blog.routes';

const globalRouter: Router = express.Router();

const routers = [
  {
    path: '/users',
    router: userRouter,
  },
  {
    path: '/orders',
    router: orderRouter,
  },
  {
    path: '/products',
    router: productRouter,
  },
  {
    path: '/reviews',
    router: reviewRouter,
  },
  {
    path: '/category',
    router: categoryRouter,
  },
  {
    path: '/transactions',
    router: transactionRouter,
  },
  {
    path: '/locations',
    router: locationRouter,
  },
  {
    path: '/blogs',
    router: blogRouter,
  },
];

routers.forEach(route => globalRouter.use(route.path, route.router));
export default globalRouter;
