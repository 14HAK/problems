import { TUSER } from './user.interface';
import User from './user.model';

export const getAllUser = async (): Promise<Partial<TUSER | unknown>> => {
  const result = await User.find();
  return result;
};
