import express, { Router } from 'express';
import { GETAllBlog } from './blog.controller';

const blogRouter: Router = express.Router();

blogRouter.route('/all-blog').get(GETAllBlog);

export default blogRouter;
