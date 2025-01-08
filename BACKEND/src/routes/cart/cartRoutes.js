import { getCartController, createCartController, updateCartController, deleteCartController } from "../../controllers/cart/cartController.js";

import express from "express";

const router = express.Router();

router.get('/:id', getCartController);
router.post('/', createCartController);
router.put('/:id', updateCartController);
router.delete('/:id', deleteCartController);

export default router;