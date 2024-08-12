import { RequestHandler } from 'express';
import { getAllReview } from './review.services';
import { TREVIEW } from './review.interface';

export const GETAllReview: RequestHandler = async (req, res, next): Promise<void> => {
  const result: Partial<TREVIEW> = await getAllReview();
  res.status(200).json({
    success: 'true',
    statusCode: 200,
    message: 'Service created successfully',
    data: result,
  });
};
