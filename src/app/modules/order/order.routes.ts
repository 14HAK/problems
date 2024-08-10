import express, { Router } from 'express';
import { GETAllOrders } from './order.controller';
const orderRouter: Router = express.Router();

orderRouter.route('/all-order').get(GETAllOrders);

export default orderRouter;
