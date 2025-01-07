import { connection_create } from "../../database.js";

const getAllProducts = () => {
    const query = "SELECT * FROM products";

    return new Promise((resolve, reject) => {
        connection_create.query(query, (error, results) => {
            if (error) {
                reject(error);
                console.error(error)
            }

            resolve(results)
        })
    })
}

const getProductById = (id) => { 
    const query = "SELECT * FROM products WHERE id = ?";

    return new Promise((resolve, reject) => {
        connection_create.query(query, id, (error, results) => {
            if (error) {
                reject(error);
                console.error(error)
            }

            resolve(results)
        })
    })
}

const createProduct = (product) => {
    const {product_name, product_description, price, stock, category, image_url} = product;

    const query = "INSERT INTO products (product_name, product_description, price, stock, category, image_url) VALUES (?, ?, ?, ?, ?, ?)";

    return new Promise((resolve, reject) => {
        connection_create.query(query, [product_name, product_description, price, stock, category, image_url], (error, results) => {
            if (error) {
                reject(error);
                console.error(error)
            }

            resolve(results)
        })
    })
}

const updateProduct = (id, product) => {
    const {product_name, product_description, price, stock, category, image} = product;

    const query = "UPDATE products SET product_name = ?, product_description = ?, price = ?, stock = ?, category = ?, image = ? WHERE id = ?";

    return new Promise((resolve, reject) => {
        connection_create.query(query, [product_name, product_description, price, stock, category, image , id], (error, results) => {
            if (error) {
                reject(error);
                console.error(error)
            }

            resolve(results)
        })
    })
}

const deleteProduct = (id) => {
    const query = "DELETE FROM products WHERE id = ?";

    return new Promise((resolve, reject) => {
        connection_create.query(query, id, (error, results) => {
            if (error) {
                reject(error);
                console.error(error)
            }

            resolve(results)
        })
    })
}

export {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct}