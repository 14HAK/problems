import { TPRODUCT } from './product.interface';
import Product from './product.model';

export const getAllProducts = async (): Promise<TPRODUCT | unknown> => {
  const result = await Product.find({});
  return result;
};
