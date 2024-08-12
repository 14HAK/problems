import { RequestHandler } from 'express';
import { getAllCategory } from './category.services';
import { TCATEGORY } from './category.interface';

export const GETAllCategory: RequestHandler = async (req, res, next): Promise<void> => {
  const result: Partial<TCATEGORY> = await getAllCategory();
  res.status(200).json({
    success: 'true',
    statusCode: 200,
    message: 'Service created successfully',
    data: result,
  });
};
