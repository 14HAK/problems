import { RequestHandler } from 'express';
import { getAllOrders } from './order.services';

export const GETAllOrders: RequestHandler = async (req, res, next): Promise<void> => {
  const result = await getAllOrders();
  res.status(200).json({
    status: 'success',
    message: 'data retrieve success',
    data: result,
  });
};
