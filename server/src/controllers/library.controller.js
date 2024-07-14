import { StatusCodes } from 'http-status-codes';
import { libraryService } from '../services/index.js';
import { handleError, handleResponse, validateFields } from '../utils/index.js';

async function createLibrary(req, res) {
    try {
        validateFields(req, {
            body: ['email', 'password', 'name', 'libName', 'address'],
        });
        const { email, password, name, libName, address } = req.body;
        console.log('received....');
        console.log({ email, password, name, libName, address });
        const library = await libraryService.createLibrary(
            { email, password, name },
            libName,
            address
        );
        handleResponse(
            res,
            StatusCodes.CREATED,
            library,
            'Library created successfully'
        );
    } catch (error) {
        handleError(error, res);
    }
}

// get library by id
async function getLibraryById(req, res) {
    try {
        validateFields(req, { params: ['libId'] });
        const { libId } = req.params;
        const library = await libraryService.getLibraryById(libId);
        handleResponse(
            res,
            StatusCodes.OK,
            library,
            'Library retrieved successfully'
        );
    } catch (error) {
        handleError(error, res);
    }
}

// get all libraries
async function getAllLibraries(req, res) {
    try {
        const libraries = await libraryService.getAllLibraries();
        handleResponse(
            res,
            StatusCodes.OK,
            libraries,
            'Libraries retrieved successfully'
        );
    } catch (error) {
        handleError(error, res);
    }
}

// update library
async function updateLibrary(req, res) {
    try {
        validateFields(req, {
            params: ['libId'],
        });
        const { libId } = req.params;
        const { libName, address } = req.body;
        const library = await libraryService.updateLibrary(
            libId,
            libName,
            address
        );
        handleResponse(
            res,
            StatusCodes.OK,
            library,
            'Library updated successfully'
        );
    } catch (error) {
        handleError(error, res);
    }
}

// delete library
async function deleteLibrary(req, res) {
    try {
        validateFields(req, { params: ['libId'] });
        const { libId } = req.params;
        const library = await libraryService.deleteLibrary(libId);
        handleResponse(
            res,
            StatusCodes.OK,
            library,
            'Library deleted successfully'
        );
    } catch (error) {
        handleError(error, res);
    }
}

const libraryController = {
    createLibrary,
    getLibraryById,
    getAllLibraries,
    updateLibrary,
    deleteLibrary,
};

export default libraryController;
