import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalRouter from './app/routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  console.log({
    path: req.path,
    method: req.method,
    strick: new Date().toLocaleString(),
  });
  next();
});
app.get('/', (req: Request, res: Response) => {
  res.send({ status: 200, message: 'Hello World!' });
});
app.use('/api/v1', globalRouter);

export default app;
