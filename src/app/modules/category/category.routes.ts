import express, { Router } from 'express';
import { GETAllCategory } from './category.controller';

const categoryRouter: Router = express.Router();

categoryRouter.route('/all-user').get(GETAllCategory);

export default categoryRouter;
