import { StatusCodes } from 'http-status-codes';
import { bookService } from '../services/index.js';
import { handleError, handleResponse, validateFields } from '../utils/index.js';

const getAllBooks = async (req, res) => {
    try {
        const books = await bookService.getAllBooks();
        handleResponse(
            res,
            StatusCodes.OK,
            books,
            'Books retrieved successfully'
        );
    } catch (error) {
        handleError(error, res);
    }
};

const getBookById = async (req, res) => {
    try {
        validateFields(req, { params: ['bookId'] });
        const { bookId } = req.params;
        const book = await bookService.getBookById(bookId);
        handleResponse(
            res,
            StatusCodes.OK,
            book,
            'Book retrieved successfully'
        );
    } catch (error) {
        handleError(error, res);
    }
};

// searchBook
const searchBooks = async (req, res) => {
    try {
        validateFields(req, { query: ['query'] });
        const {
            search = '',
            sortBy = 'year',
            searchBy = ['title'],
            order = -1,
            libId,
        } = req.query;

        const query = {
            search,
            sortBy,
            searchBy,
            order,
            libId,
        };

        const books = await bookService.searchBooks(query);
        handleResponse(
            res,
            StatusCodes.OK,
            books,
            'Books retrieved successfully'
        );
    } catch (error) {
        handleError(error, res);
    }
};

export default { getAllBooks, getBookById, searchBooks };
