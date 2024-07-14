import {
    authRepository,
    libraryRepository,
    userRepository,
} from '../repositories/index.js';
import { APP_NAME, LIBRARY_ERRORS } from '../constants.js';
import { handleInternalServerError, sendMail } from '../utils/index.js';
import { verifyEmailHTML } from '../utils/HTMLTemplate/verifyEmail.js';

async function createLibrary(librarian, libName, address) {
    try {
        console.log({ librarian });
        const { email, password, name } = librarian;

        await authRepository.createAuth(email, password);

        const user = await userRepository.createUser(email, 'librarian', name);
        const token = await user.generateToken();
        sendMail(
            email,
            `Welcome to ${APP_NAME} - Verify Your Email`,
            verifyEmailHTML(token)
        );

        const library = libraryRepository.createLibrary(
            libName,
            address,
            user._id
        );

        return library;
    } catch (error) {
        handleInternalServerError(error, LIBRARY_ERRORS.SERVICE_LAYER);
    }
}

// get library by id
async function getLibraryById(id) {
    try {
        return await libraryRepository.getLibraryById(id);
    } catch (error) {
        handleInternalServerError(error, LIBRARY_ERRORS.SERVICE_LAYER);
    }
}

// get all libraries
async function getAllLibraries() {
    try {
        return await libraryRepository.getAllLibraries();
    } catch (error) {
        handleInternalServerError(error, LIBRARY_ERRORS.SERVICE_LAYER);
    }
}

// update library by id
async function updateLibrary(id, name, address) {
    try {
        return await libraryRepository.updateLibrary(id, name, address);
    } catch (error) {
        handleInternalServerError(error, LIBRARY_ERRORS.SERVICE_LAYER);
    }
}

// delete library by id
async function deleteLibrary(id) {
    try {
        // TODO delete all books in the library
        // TODO delete all current borrows from the library
        return await libraryRepository.deleteLibrary(id);
    } catch (error) {
        handleInternalServerError(error, LIBRARY_ERRORS.SERVICE_LAYER);
    }
}

const libraryService = {
    createLibrary,
    getLibraryById,
    getAllLibraries,
    updateLibrary,
    deleteLibrary,
};

export default libraryService;
