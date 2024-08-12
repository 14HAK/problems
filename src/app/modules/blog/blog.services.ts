import { TBLOG } from './blog.interface';
import Blog from './blog.model';

export const getAllBlog = async (): Promise<Partial<TBLOG | unknown>> => {
  const result = await Blog.find();
  return result;
};
