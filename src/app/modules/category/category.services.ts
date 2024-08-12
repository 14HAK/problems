import { TCATEGORY } from './category.interface';
import Category from './category.model';

export const getAllCategory = async (): Promise<Partial<TCATEGORY | unknown>> => {
  const result = await Category.find();
  return result;
};
