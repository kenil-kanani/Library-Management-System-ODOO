import { BORROW_ERRORS } from '../constants.js';
import BorrowRepository from '../repositories/borrow.repository.js';
import { handleInternalServerError } from '../utils/index.js';

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
        return await BorrowRepository.addBorrow(
            userId,
            bookId,
            libId,
            dueDate,
            returnedAt,
            lateFee,
            borrowedAt
        );
    } catch (error) {
        handleInternalServerError(error, BORROW_ERRORS.SERVICE_LAYER);
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
    isIssued,
}) {
    try {
        return await BorrowRepository.updateBorrow(
            userId,
            bookId,
            libId,
            dueDate,
            returnedAt,
            lateFee,
            isIssued
        );
    } catch (error) {
        handleInternalServerError(error, BORROW_ERRORS.SERVICE_LAYER);
    }
}

// get borrow by user
async function getBorrowByUser(userId) {
    try {
        return await BorrowRepository.getBorrowByUser(userId);
    } catch (error) {
        handleInternalServerError(error, BORROW_ERRORS.SERVICE_LAYER);
    }
}

// get borrow by book
async function getBorrowByBook(bookId) {
    try {
        return await BorrowRepository.getBorrowByBook(bookId);
    } catch (error) {
        handleInternalServerError(error, BORROW_ERRORS.SERVICE_LAYER);
    }
}

// get borrow by library
async function getBorrowByLibrary(libId) {
    try {
        return await BorrowRepository.getBorrowByLibrary(libId);
    } catch (error) {
        handleInternalServerError(error, BORROW_ERRORS.SERVICE_LAYER);
    }
}

// get borrow by user and book and library
async function getBorrowByUserBookLibrary(userId, bookId, libId) {
    try {
        return await BorrowRepository.getBorrowByUserBookLibrary(
            userId,
            bookId,
            libId
        );
    } catch (error) {
        handleInternalServerError(error, BORROW_ERRORS.SERVICE_LAYER);
    }
}

// get borrow by isPaid
async function getBorrowByPayment({ userId, isPaid = false }) {
    try {
        return await BorrowRepository.getBorrowByPayment({ userId, isPaid });
    } catch (error) {
        handleInternalServerError(error, BORROW_ERRORS.SERVICE_LAYER);
    }
}

// get borrow by pending due date
async function getBorrowByDueDate({ userId }) {
    try {
        return await BorrowRepository.getBorrowByDueDate({ userId });
    } catch (error) {
        handleInternalServerError(error, BORROW_ERRORS.SERVICE_LAYER);
    }
}

// get borrow by late due date
async function getBorrowByLateDate({ userId }) {
    try {
        return await BorrowRepository.getBorrowByLateDate({ userId });
    } catch (error) {
        handleInternalServerError(error, BORROW_ERRORS.SERVICE_LAYER);
    }
}

const borrowService = {
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

export default borrowService;
