import { BOOK_ERRORS } from '../constants.js';
import { bookRepository } from '../repositories/index.js';
import { handleInternalServerError } from '../utils/index.js';

const getAllBooks = async () => {
    try {
        return await bookRepository.getAllBooks();
    } catch (error) {
        handleInternalServerError(error, BOOK_ERRORS.SERVICE_LAYER);
    }
};
const getBookById = async (bookId) => {
    try {
        return await bookRepository.getBookById(bookId);
    } catch (error) {
        handleInternalServerError(error, BOOK_ERRORS.SERVICE_LAYER);
    }
};

// searchBook
const searchBooks = async (query) => {
    try {
        return await bookRepository.searchBooks(query);
    } catch (error) {
        handleInternalServerError(error, BOOK_ERRORS.SERVICE_LAYER);
    }
};

const bookService = { getAllBooks, getBookById, searchBooks };
export default bookService;
