import { connection_create } from "../../database.js";

const getAllOrderItem = (order_foreign) => {
    const query = "SELECT * FROM order_item WHERE order_foreign = ?";

    return new Promise((resolve, reject) => {
        connection_create.query(query, [order_foreign], (error, results) => {
            if (error) {
                reject(error);
                console.error(error); 
            }
            resolve(results);
        });
    });
};

const createOrderItem = (orderItem) => {
    const { order_foreign, product_foreign, quantity } = orderItem;

    const query = "INSERT INTO order_item (order_foreign, product_foreign, quantity) VALUES (?, ?, ?)";

    return new Promise((resolve, reject) => {
        connection_create.query(query, [order_foreign, product_foreign, quantity], (error, results) => {
            if (error) {
                reject(error);
                console.error(error);
            }
            resolve(results);
        });
    });
};

export { getAllOrderItem, createOrderItem };