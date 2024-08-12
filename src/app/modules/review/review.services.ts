import { TREVIEW } from './review.interface';
import Review from './review.model';

export const getAllReview = async (): Promise<Partial<TREVIEW | unknown>> => {
  const result = await Review.find();
  return result;
};
