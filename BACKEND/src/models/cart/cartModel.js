import { connection_create } from "../../database.js";

const getCart = (user_foreign) => {
    const query = "SELECT * FROM cart WHERE user_foreign = ?";

    return new Promise((resolve, reject) => {
        connection_create.query(query, [user_foreign], (error, results) => {
            if (error) {
                reject(error);
                console.error(error);
            }
            resolve(results);
        });
    });
};

const createCart = (cart) => {
    const { user_foreign, product_foreign, quantity } = cart;
      
    const query = "INSERT INTO cart (user_foreign, product_foreign, quantity) VALUES (?, ?, ?)";

    return new Promise((resolve, reject) => {
        connection_create.query(query, [user_foreign, product_foreign, quantity], (error, results) => {
            if (error) {
                reject(error);
                console.error(error);
            }
            resolve(results);
        });
    });
};

const deleteCart = (user_foreign) => {
    const query = "DELETE FROM cart WHERE user_foreign = ?";

    return new Promise((resolve, reject) => {
        connection_create.query(query, [user_foreign], (error, results) => {
            if (error) {
                reject(error);
                console.error(error);
            }
            resolve(results);
        });
    });
};

const updateCart = (cart) => {
    const { id, quantity } = cart;

    const query = "UPDATE cart SET quantity = ? WHERE id = ?";

    return new Promise((resolve, reject) => {
        connection_create.query(query, [quantity, id], (error, results) => {
            if (error) {
                reject(error);
                console.error(error);
            }
            resolve(results);
        });
    });
};

export { getCart, createCart, deleteCart, updateCart };