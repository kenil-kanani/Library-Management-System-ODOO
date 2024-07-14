import { Router } from 'express';
import { bookController } from '../../controllers/index.js';

const router = Router();

router.route('/').get(bookController.getAllBooks);

router.route('/:bookId').get(bookController.getBookById);

export default router;
