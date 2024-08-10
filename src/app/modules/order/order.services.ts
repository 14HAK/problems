import { TORDER } from './order.interface';
import Order from './order.model';

export const getAllProducts = async (): Promise<TORDER | unknown> => {
  const result = await Order.find({});
  return result;
};
