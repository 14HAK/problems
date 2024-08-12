import { RequestHandler } from 'express';
import { getAllBlog } from './blog.services';
import { TBLOG } from './blog.interface';

export const GETAllBlog: RequestHandler = async (req, res, next): Promise<void> => {
  const result: Partial<TBLOG> = await getAllBlog();
  res.status(200).json({
    success: 'true',
    statusCode: 200,
    message: 'Service created successfully',
    data: result,
  });
};
