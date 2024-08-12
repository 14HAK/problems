import { RequestHandler } from 'express';
import { TLOCATION } from './location.interface';
import { getAllLocation } from './location.services';

export const GETAllLocation: RequestHandler = async (req, res, next): Promise<void> => {
  const result: Partial<TLOCATION> = await getAllLocation();
  res.status(200).json({
    success: 'true',
    statusCode: 200,
    message: 'Service created successfully',
    data: result,
  });
};
