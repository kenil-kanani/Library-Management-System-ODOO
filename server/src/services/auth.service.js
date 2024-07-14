import { authRepository, userRepository } from '../repositories/index.js'
import { APP_NAME, AUTH_ERRORS } from '../constants.js';
import { ApiError, handleInternalServerError } from '../utils/index.js';
import { StatusCodes } from 'http-status-codes';
import User from '../models/user.model.js';

async function createAuth(email, password, role, name) {
    try {
        await authRepository.createAuth(email, password);
        const user = await userRepository.createUser(email, role, name);
        return { email, role, name };
    } catch (error) {
        handleInternalServerError(error, AUTH_ERRORS.SERVICE_LAYER);
    }
}

async function authenticate(email, password) {
    try {
        const auth = await authRepository.getAuthByEmail(email);
        const isPasswordValid = await auth.comparePassword(password);
        if (!isPasswordValid) {
            throw new ApiError(StatusCodes.UNAUTHORIZED, AUTH_ERRORS.INVALID_CREDENTIALS);
        }
        const user = await userRepository.getUserByEmail(email);
        if (!auth.verified) {
            throw new ApiError(StatusCodes.UNAUTHORIZED, AUTH_ERRORS.USER_NOT_VERIFIED);
        }
        const token = await user.generateToken();
        return { email, role: user.role, name: user.name, token };
    } catch (error) {
        handleInternalServerError(error, AUTH_ERRORS.SERVICE_LAYER);
    }
}

async function validateToken(token) {
    try {
        const user = await User.decodedToken(token);
        return user;
    } catch (error) {
        handleInternalServerError(error, AUTH_ERRORS.SERVICE_LAYER);
    }
}

const authService = {
    createAuth,
    authenticate,
    validateToken
}

export default authService;