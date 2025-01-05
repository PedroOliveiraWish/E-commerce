import { getAllOrdersController, createOrderWithItemsController } from "../../controllers/orders/orderController.js";

import express from "express";

const router = express.Router();

router.get('/', getAllOrdersController);
router.post('/', createOrderWithItemsController);

export default router;