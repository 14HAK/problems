import express, { Router } from 'express';
import { GETAllLocation } from './location.controller';

const locationRouter: Router = express.Router();

locationRouter.route('/all-location').get(GETAllLocation);

export default locationRouter;
