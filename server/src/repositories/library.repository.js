import { Library } from '../models/index.js';
import { ApiError, handleInternalServerError } from '../utils/index.js';
import { LIBRARY_ERRORS } from '../constants.js';
import { StatusCodes } from 'http-status-codes';

async function createLibrary(name, address, librarian) {
    try {
        const library = new Library({ name, address, librarian });
        await library.save();
        return library;
    } catch (error) {
        handleInternalServerError(error, LIBRARY_ERRORS.REPOSITORY_LAYER);
    }
}

// get library by id
async function getLibraryById(id) {
    try {
        const library = await Library.findById(id);
        if (!library) {
            throw new ApiError(
                StatusCodes.NOT_FOUND,
                LIBRARY_ERRORS.LIBRARY_NOT_FOUND
            );
        }
        return library;
    } catch (error) {
        handleInternalServerError(error, LIBRARY_ERRORS.REPOSITORY_LAYER);
    }
}

// get all libraries
async function getAllLibraries() {
    try {
        const libraries = await Library.find();
        return libraries;
    } catch (error) {
        handleInternalServerError(error, LIBRARY_ERRORS.REPOSITORY_LAYER);
    }
}

// update library by id
async function updateLibrary(id, name, address) {
    try {
        const library = await getLibraryById(id);
        if (!library) {
            throw new ApiError(
                StatusCodes.NOT_FOUND,
                LIBRARY_ERRORS.LIBRARY_NOT_FOUND
            );
        }
        library.name = name ?? library.name;
        library.address = address ?? library.address;
        await library.save();
        return library;
    } catch (error) {
        handleInternalServerError(error, LIBRARY_ERRORS.REPOSITORY_LAYER);
    }
}

// delete library by id
async function deleteLibrary(id) {
    try {
        const library = await Library.findByIdAndDelete(id);
        if (!library) {
            throw new ApiError(
                StatusCodes.NOT_FOUND,
                LIBRARY_ERRORS.LIBRARY_NOT_FOUND
            );
        }
        return library;
    } catch (error) {
        handleInternalServerError(error, LIBRARY_ERRORS.REPOSITORY_LAYER);
    }
}

const libraryRepository = {
    createLibrary,
    getLibraryById,
    getAllLibraries,
    updateLibrary,
    deleteLibrary,
};

export default libraryRepository;
