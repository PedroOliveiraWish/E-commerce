import { getAllOrdersController, getOrderByIDController, createOrderWithItemsController, updateOrderController, deleteOrderController } from "../../controllers/orders/orderController.js";

import express from "express";

const router = express.Router();

router.get('/', getAllOrdersController);
router.get('/:id', getOrderByIDController);
router.post('/', createOrderWithItemsController);
router.put('/', updateOrderController);
router.delete('/:id', deleteOrderController);

export default router;