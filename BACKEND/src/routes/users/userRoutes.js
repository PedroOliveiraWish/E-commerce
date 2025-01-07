import { getAllUsersController, getUserByIdController, createUserController,authUserController, deleteUserController } from "../../controllers/users/userController.js";

import express from "express";

const router = express.Router();

router.get('/', getAllUsersController);
router.get('/:id', getUserByIdController);

router.post('/auth', authUserController);
router.post('/', createUserController);
router.delete('/:id', deleteUserController);

export default router;