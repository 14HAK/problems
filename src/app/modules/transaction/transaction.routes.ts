import express, { Router } from 'express';
import { GETAllTransaction } from './transaction.controller';

const transactionRouter: Router = express.Router();

transactionRouter.route('/all-transaction').get(GETAllTransaction);

export default transactionRouter;
