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
async function updateBorrow({ id, dueDate, returnedAt, lateFee }) {
    try {
        const borrow = await Borrow.findById(id);
        if (!borrow) {
            throw new ApiError(
                StatusCodes.NOT_FOUND,
                BORROW_ERRORS.BORROW_NOT_FOUND
            );
        }
        borrow.dueDate = dueDate ?? borrow.dueDate;
        borrow.returnedAt = returnedAt ?? borrow.returnedAt;
        borrow.lateFee = lateFee ?? borrow.lateFee;
        await borrow.save();
        return borrow;
    } catch (error) {
        handleInternalServerError(error, BORROW_ERRORS.REPOSITORY_LAYER);
    }
}

const BorrowRepository = { addBorrow, updateBorrow };

export default BorrowRepository;
