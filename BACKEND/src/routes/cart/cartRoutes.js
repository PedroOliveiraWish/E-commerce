import { getCartController, createCartController, deleteCartController } from "../../controllers/cart/cartController.js";

import express from "express";

const router = express.Router();

router.get('/', getCartController);
router.post('/', createCartController);
router.delete('/:id', deleteCartController);

export default router;