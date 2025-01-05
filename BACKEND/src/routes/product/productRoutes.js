import { getAllProductsController, getProductByIdController, createProductController, updateProductController, deleteProductController } from "../../controllers/products/productController.js";

import express from "express";

const router = express.Router();

router.get('/', getAllProductsController);
router.get('/:id', getProductByIdController);
router.post('/', createProductController);
router.put('/:id', updateProductController);
router.delete('/:id', deleteProductController);

export default router;