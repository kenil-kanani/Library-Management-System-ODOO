import { BOOK_ERRORS } from '../constants.js';
import { Book } from '../models/book.model.js';
import axios from 'axios';
import { handleInternalServerError } from '../utils/index.js';

const fetchBooksFromAPI = async (query = 'all', maxResults = 10) => {
    try {
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}`
        );
        const books = response.data.items.map((item) => ({
            library: '669377738ce7f9ee42f57479',
            ISBN: item.volumeInfo.industryIdentifiers?.[0]?.identifier || 'N/A',
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors?.[0] || 'Unknown',
            publisher: item.volumeInfo.publisher || 'Unknown',
            language: item.volumeInfo.language,
            year: item.volumeInfo.publishedDate?.split('-')[0] || 'Unknown',
            genre: item.volumeInfo.categories?.[0] || 'Uncategorized',
            pageCount: item.volumeInfo.pageCount || 0,
            quantity: 1,
            available_quantity: 1,
        }));
        return books;
    } catch (error) {
        handleInternalServerError(error, BOOK_ERRORS.REPOSITORY_LAYER);
    }
};

const saveBooksToDatabase = async () => {
    try {
        const books = await fetchBooksFromAPI();
        for (const book of books) {
            await Book.create(book);
        }
    } catch (error) {
        handleInternalServerError(error, BOOK_ERRORS.REPOSITORY_LAYER);
    }
};

const getAllBooks = async () => {
    try {
        return await Book.find();
    } catch (error) {
        handleInternalServerError(error, BOOK_ERRORS.REPOSITORY_LAYER);
    }
};

// get book by Id
const getBookById = async (id) => {
    try {
        return await Book.findById(id);
    } catch (error) {
        handleInternalServerError(error, BOOK_ERRORS.REPOSITORY_LAYER);
    }
};

export default {
    fetchBooksFromAPI,
    saveBooksToDatabase,
    getAllBooks,
    getBookById,
};

// saveBooksToDatabase();
