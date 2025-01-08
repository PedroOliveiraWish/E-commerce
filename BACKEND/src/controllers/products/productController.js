import { getAllProductsService, getProductByIdService, createProductService, updateProductService, deleteProductService } from "../../services/products/productService.js";

const getAllProductsController = async (req, res) => {
    try {
        const products = await getAllProductsService();
        return res.json(products);
    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: "Error fetching products" });
    }
}

const getProductByIdController = async (req, res) => {
    const {id} = req.params;
    try {
         const product = await getProductByIdService(id);
         return res.json(product);
    } catch (error) {
        console.error(error)
         return res.status(400).json({ message: "Error fetching product" });
    }
}

const createProductController = async (req, res) => {
    const product = req.body;

    try {
        const newProduct = await createProductService(product);
        return res.json({product: newProduct, message: "Product created successfully"});
    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: "Error creating product" });
    }
}

const updateProductController = async (req, res) => {
    const id = req.params;
    const product = req.body;

    try {
         const updatedProduct = await updateProductService(id, product);

          return res.json(updatedProduct);
    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: "Error updating product" });
    }
}

const deleteProductController = async (req, res) => {
    const id = req.params;

    try {
        await deleteProductService(id);
        return res.json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: "Error deleting product" });
    }
}

export { getAllProductsController, getProductByIdController, createProductController, updateProductController, deleteProductController };