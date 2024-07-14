import {
    authRepository,
    libraryRepository,
    userRepository,
} from '../repositories/index.js';
import { APP_NAME, AUTH_ERRORS, LIBRARY_ERRORS } from '../constants.js';
import {
    ApiError,
    handleInternalServerError,
    sendMail,
} from '../utils/index.js';
import { StatusCodes } from 'http-status-codes';
import { verifyEmailHTML } from '../utils/HTMLTemplate/verifyEmail.js';

async function createLibrary(librarian, name, address) {
    try {
        const { email, password, role, name } = librarian;

        await authRepository.createAuth(email, password);

        const user = await userRepository.createUser(email, role, name);
        const token = await user.generateToken();

        sendMail(
            email,
            `Welcome to ${APP_NAME} - Verify Your Email`,
            verifyEmailHTML(token)
        );

        const library = libraryRepository.createLibrary(
            name,
            address,
            user._id
        );
        
        return library;
    } catch (error) {
        handleInternalServerError(error, LIBRARY_ERRORS.SERVICE_LAYER);
    }
}

const libraryService = {
    createLibrary,
};

export default libraryService;
