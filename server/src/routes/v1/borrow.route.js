import { Router } from 'express';
import { borrowController } from '../../controllers/index.js';
import { verifyJWT } from '../../middlewares/index.js';

const router = Router();

router
    .route('/')
    .post(borrowController.addBorrow)
    .get(borrowController.getBorrowByUser); // Assuming this is meant to list all borrows for a user

router.route('/user/:userId').get(borrowController.getBorrowByUser); // Specific route to get borrows by user ID

router.route('/book/:bookId').get(borrowController.getBorrowByBook); // Get borrows by book ID

router.route('/library/:libId').get(borrowController.getBorrowByLibrary); // Get borrows by library ID

router
    .route('/userbooklibrary')
    .get(verifyJWT, borrowController.getBorrowByUserBookLibrary); // Get borrows by user, book, and library

router.route('/payment').get(verifyJWT, borrowController.getBorrowByPayment); // Get borrows by payment status

router.route('/due').get(verifyJWT, borrowController.getBorrowByDueDate); // Get borrows by due date

router.route('/late').get(verifyJWT, borrowController.getBorrowByLateDate); // Get borrows by late due date

router.route('/update').post(borrowController.updateBorrow); // Update borrow details

export default router;
