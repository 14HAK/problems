import { TLOCATION } from './location.interface';
import Location from './location.model';

export const getAllLocation = async (): Promise<Partial<TLOCATION | unknown>> => {
  const result = await Location.find({});
  return result;
};
