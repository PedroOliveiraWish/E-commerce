import { getAllUsersController, getUserByIdController, createUserController, deleteUserController } from "../../controllers/users/userController.js";

import express from "express";

const router = express.Router();

router.get('/', getAllUsersController);
router.get('/:id', getUserByIdController);
router.post('/', createUserController);
router.delete('/:id', deleteUserController);

export default router;