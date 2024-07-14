import { BOOK_ERRORS } from '../constants.js';
import { Book } from '../models/book.model.js';
import axios from 'axios';
import { ApiError, handleInternalServerError } from '../utils/index.js';
import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';

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
        const book = await Book.findById(id);
        if (!book) {
            throw new ApiError(
                StatusCodes.NOT_FOUND,
                BOOK_ERRORS.BOOK_NOT_FOUND
            );
        }
        return book;
    } catch (error) {
        handleInternalServerError(error, BOOK_ERRORS.REPOSITORY_LAYER);
    }
};

// add book
const addBook = async (book) => {
    try {
        const book = await Book.create(book);
        return book;
    } catch (error) {
        handleInternalServerError(error, BOOK_ERRORS.REPOSITORY_LAYER);
    }
};

// update book
const updateBook = async (
    id,
    title,
    author,
    publisher,
    year,
    genre,
    quantity,
    pageCount,
    language,
    available_quantity
) => {
    try {
        const book = await Book.findById(id);

        if (!book) {
            throw new ApiError(
                StatusCodes.NOT_FOUND,
                BOOK_ERRORS.BOOK_NOT_FOUND
            );
        }
        book.title = title ?? book.title;
        book.author = author ?? book.author;
        book.publisher = publisher ?? book.publisher;
        book.language = language ?? book.language;
        book.year = year ?? book.year;
        book.genre = genre ?? book.genre;
        book.quantity = quantity ?? book.quantity;
        book.pageCount = pageCount ?? book.pageCount;
        book.available_quantity = available_quantity ?? book.available_quantity;
    } catch (error) {
        handleInternalServerError(error, BOOK_ERRORS.REPOSITORY_LAYER);
    }
};

const searchBooks = async (query) => {
    try {
        // const {
        //     search = '',
        //     sortBy = 'year',
        //     searchBy = 'title',
        //     order = -1,
        //     libId,
        // } = query;

        // console.log({ search, sortBy, searchBy, order, libId });

        // let matchStage = {};

        // if(searchBy === 'title') {

        // }

        // const pipeline = [
        //     matchStage,
        //     {
        //         $sort: {
        //             [sortBy]: order,
        //         },
        //     },
        //     {
        //         $lookup: {
        //             from: 'libraries',
        //             localField: 'libId',
        //             foreignField: '_id',
        //             as: 'libraryInfo',
        //             pipeline: [
        //                 {
        //                     $lookup: {
        //                         from: 'users',
        //                         localField: 'librarian',
        //                         foreignField: '_id',
        //                         as: 'librarian',
        //                     },
        //                 },
        //             ],
        //         },
        //     },
        //     {
        //         $unwind: '$libraryInfo',
        //     },
        //     {
        //         $unwind: '$libraryInfo.librarian',
        //     },
        // ];

        // console.log({ pipeline });

        // const result = await Book.aggregate(pipeline);

        // return result;
    } catch (error) {
        console.log('BOOK REPO: ' + error);
        handleInternalServerError(error, BOOK_ERRORS.REPOSITORY_LAYER);
    }
};

export default {
    getAllBooks,
    updateBook,
    getBookById,
    searchBooks,
};

// saveBooksToDatabase();
