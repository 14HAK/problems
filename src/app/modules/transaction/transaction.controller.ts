import { RequestHandler } from 'express';
import { TTRANSACTION } from './transaction.interface';
import { getAllTransaction } from './transaction.services';

export const GETAllTransaction: RequestHandler = async (
  req,
  res,
  next
): Promise<void> => {
  const result: Partial<TTRANSACTION> = await getAllTransaction();
  res.status(200).json({
    success: 'true',
    statusCode: 200,
    message: 'Service created successfully',
    data: result,
  });
};
