import express, { Router } from 'express';
import { GETAllProducts } from './product.controller';

const productRouter: Router = express.Router();

productRouter.route('/all-product').get(GETAllProducts);

export default productRouter;
