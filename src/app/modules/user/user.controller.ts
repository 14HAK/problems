import { RequestHandler } from 'express';
import { TUSER } from './user.interface';
import { getAllUser } from './user.services';

export const GETAllUser: RequestHandler = async (req, res, next): Promise<void> => {
  const result: Partial<TUSER> = await getAllUser();
  res.status(200).json({
    success: 'true',
    statusCode: 200,
    message: 'Service created successfully',
    data: result,
  });
};
