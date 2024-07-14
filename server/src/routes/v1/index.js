import { Router } from 'express';
import authRouter from './auth.route.js';
import libraryRouter from './library.route.js';
import bookRouter from './book.route.js';

const v1Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/lib', libraryRouter);
v1Router.use('/book', bookRouter);

export default v1Router;
