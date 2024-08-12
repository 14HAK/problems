import { TORDER } from './order.interface';
import Order from './order.model';

export const getAllOrders = async (): Promise<TORDER | unknown> => {
  const result = await Order.find({});
  return result;
};
