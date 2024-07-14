import { StatusCodes } from 'http-status-codes';
import { BORROW_ERRORS } from '../constants.js';
import { Borrow } from '../models/index.js';
import { handleInternalServerError } from '../utils/handleInternalServerError.js';
import { ApiError } from '../utils/ApiError.js';

// borrowBook
async function addBorrow(
    userId,
    bookId,
    libId,
    dueDate,
    returnedAt,
    lateFee,
    borrowedAt
) {
    try {
        const borrow = new Borrow({
            userId,
            bookId,
            libId,
            dueDate,
            returnedAt,
            lateFee,
            borrowedAt,
        });
        await borrow.save();
        return borrow;
    } catch (error) {
        handleInternalServerError(error, BORROW_ERRORS.REPOSITORY_LAYER);
    }
}

// update borrow
async function updateBorrow({
    userId,
    bookId,
    libId,
    dueDate,
    returnedAt,
    lateFee,
    isIssued
}) {
    try {
        const borrow = await Borrow.findOne({ userId, bookId, libId });
        if (!borrow) {
            throw new ApiError(
                StatusCodes.NOT_FOUND,
                BORROW_ERRORS.BORROW_NOT_FOUND
            );
        }
        borrow.dueDate = dueDate ?? borrow.dueDate;
        borrow.returnedAt = returnedAt ?? borrow.returnedAt;
        borrow.lateFee = lateFee ?? borrow.lateFee;
        borrow.isIssued = isIssued ?? borrow.isIssued;
        await borrow.save();
        return borrow;
    } catch (error) {
        handleInternalServerError(error, BORROW_ERRORS.REPOSITORY_LAYER);
    }
}

// get borrow by user
async function getBorrowByUser(userId) {
    try {
        const borrow = await Borrow.find({ userId });
        return borrow;
    } catch (error) {
        handleInternalServerError(error, BORROW_ERRORS.REPOSITORY_LAYER);
    }
}

// get borrow by book
async function getBorrowByBook(bookId) {
    try {
        const borrow = await Borrow.find({ bookId });
        return borrow;
    } catch (error) {
        handleInternalServerError(error, BORROW_ERRORS.REPOSITORY_LAYER);
    }
}

// get borrow by library
async function getBorrowByLibrary(libId) {
    try {
        const borrow = await Borrow.find({ libId });
        return borrow;
    } catch (error) {
        handleInternalServerError(error, BORROW_ERRORS.REPOSITORY_LAYER);
    }
}

// get borrow by user and book and library
async function getBorrowByUserBookLibrary(userId, bookId, libId) {
    try {
        const borrow = await Borrow.findOne({ userId, bookId, libId });
        return borrow;
    } catch (error) {
        handleInternalServerError(error, BORROW_ERRORS.REPOSITORY_LAYER);
    }
}

// get borrow by isPaid
async function getBorrowByPayment({ userId, isPaid = false }) {
    try {
        const borrow = await Borrow.find({ userId, isPaid });
        return borrow;
    } catch (error) {
        handleInternalServerError(error, BORROW_ERRORS.REPOSITORY_LAYER);
    }
}

// get borrow by pending due date
async function getBorrowByDueDate({ userId }) {
    try {
        const borrow = await Borrow.find({
            userId,
            dueDate: { $gt: new Date() },
        });
        return borrow;
    } catch (error) {
        handleInternalServerError(error, BORROW_ERRORS.REPOSITORY_LAYER);
    }
}

// get borrow by late due date
async function getBorrowByLateDate({ userId }) {
    try {
        const borrow = await Borrow.find({
            userId,
            dueDate: { $lt: new Date() },
            returnedAt: null,
        });
        return borrow;
    } catch (error) {
        handleInternalServerError(error, BORROW_ERRORS.REPOSITORY_LAYER);
    }
}

const BorrowRepository = {
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

export default BorrowRepository;
