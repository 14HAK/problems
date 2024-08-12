import express, { Router } from 'express';
import { GETAllReview } from './review.controller';

const reviewRouter: Router = express.Router();

reviewRouter.route('/all-review').get(GETAllReview);

export default reviewRouter;
