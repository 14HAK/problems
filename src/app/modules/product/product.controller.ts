import { RequestHandler } from 'express';
import { getAllProducts } from './product.services';

export const GETAllProducts: RequestHandler = async (req, res, next): Promise<void> => {
  const result = await getAllProducts();
  res.status(200).json({
    status: 'success',
    message: 'data retrieve successful',
    data: result,
  });
};
