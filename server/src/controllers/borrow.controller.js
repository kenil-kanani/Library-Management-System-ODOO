import { StatusCodes } from 'http-status-codes';
import { borrowService } from '../services/index.js';
import { handleError, handleResponse } from '../utils/index.js';

const addBorrow = async (req, res) => {
    try {
        const { userId, bookId, libId, dueDate } = req.body;

        const borrow = borrowService.addBorrow({
            userId,
            bookId,
            libId,
            dueDate,
        });

        handleResponse(
            res,
            StatusCodes.OK,
            borrow,
            'Books borrowed successfully'
        );
    } catch (error) {
        handleError(error, res);
    }
};

// update borrow
const updateBorrow = async (req, res) => {
    try {
        const {
            userId,
            bookId,
            libId,
            dueDate,
            returnedAt,
            lateFee,
            isIssued,
        } = req.body;

        const borrow = borrowService.updateBorrow({
            userId,
            bookId,
            libId,
            dueDate,
            returnedAt,
            lateFee,
            isIssued,
        });

        handleResponse(
            res,
            StatusCodes.OK,
            borrow,
            'Borrow updated successfully'
        );
    } catch (error) {
        handleError(error, res);
    }
};

// get borrow by user
const getBorrowByUser = async (req, res) => {
    try {
        const { userId } = req.params;

        const borrow = await borrowService.getBorrowByUser(userId);

        handleResponse(
            res,
            StatusCodes.OK,
            borrow,
            'Borrow retrieved successfully'
        );
    } catch (error) {
        handleError(error, res);
    }
};

// get borrow by book
const getBorrowByBook = async (req, res) => {
    try {
        const { bookId } = req.params;

        const borrow = await borrowService.getBorrowByBook(bookId);

        handleResponse(
            res,
            StatusCodes.OK,
            borrow,
            'Borrow retrieved successfully'
        );
    } catch (error) {
        handleError(error, res);
    }
};

// get borrow by library
const getBorrowByLibrary = async (req, res) => {
    try {
        const { libId } = req.params;

        const borrow = await borrowService.getBorrowByLibrary(libId);

        handleResponse(
            res,
            StatusCodes.OK,
            borrow,
            'Borrow retrieved successfully'
        );
    } catch (error) {
        handleError(error, res);
    }
};

// get borrow by user and book and library
const getBorrowByUserBookLibrary = async (req, res) => {
    try {
        const { bookId, libId } = req.query;
        const userId = req.user?._id;

        const borrow = await borrowService.getBorrowByUserBookLibrary(
            userId,
            bookId,
            libId
        );

        handleResponse(
            res,
            StatusCodes.OK,
            borrow,
            'Borrow retrieved successfully'
        );
    } catch (error) {
        handleError(error, res);
    }
};

// get borrow by isPaid
const getBorrowByPayment = async (req, res) => {
    try {
        const { isPaid = false } = req.query;

        const borrow = await borrowService.getBorrowByPayment({
            userId: req.user?._id,
            isPaid,
        });

        handleResponse(
            res,
            StatusCodes.OK,
            borrow,
            'Borrow retrieved successfully'
        );
    } catch (error) {
        handleError(error, res);
    }
};

// get borrow by pending due date
const getBorrowByDueDate = async (req, res) => {
    try {
        const borrow = await borrowService.getBorrowByDueDate({
            userId: req.user?._id,
        });

        handleResponse(
            res,
            StatusCodes.OK,
            borrow,
            'Borrow retrieved successfully'
        );
    } catch (error) {
        handleError(error, res);
    }
};

// get borrow by late due date
const getBorrowByLateDate = async (req, res) => {
    try {
        const borrow = await borrowService.getBorrowByLateDate({
            userId: req.user?._id,
        });

        handleResponse(
            res,
            StatusCodes.OK,
            borrow,
            'Borrow retrieved successfully'
        );
    } catch (error) {
        handleError(error, res);
    }
};

export default {
    addBorrow,
    updateBorrow,
    getBorrowByUser,
    getBorrowByBook,
    getBorrowByLibrary,
    getBorrowByUserBookLibrary,
    getBorrowByPayment,
    getBorrowByDueDate,
    getBorrowByLateDate,
};
