import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../../models/products/productModel.js";

const getAllProductsService = async () => {
    const products = await getAllProducts();

    return products;
}

const getProductByIdService = async (id) => {
    const product = await getProductById(id);

    return product;
}

const createProductService = async (product) => {
    const newProduct = await createProduct(product);

    return newProduct;
}

const updateProductService = async (id, product) => {
    const updatedProduct = await updateProduct(id, product);

    return updatedProduct;
}

const deleteProductService = async (id) => {
    const deletedProduct = await deleteProduct(id);

    return deletedProduct;
}

export { getAllProductsService, getProductByIdService, createProductService, updateProductService, deleteProductService };