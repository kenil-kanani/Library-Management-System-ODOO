import { Router } from 'express';
import { libraryController } from '../../controllers/index.js';

const router = Router();

router
    .route('/')
    .post(libraryController.createLibrary)
    .get(libraryController.getAllLibraries);

router
    .route('/:libId')
    .get(libraryController.getLibraryById)
    .patch(libraryController.updateLibrary)
    .delete(libraryController.deleteLibrary);

export default router;
