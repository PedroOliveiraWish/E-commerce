import { connection_create } from "../../database.js";

const getAllOrders = () => {
    const query = "SELECT * FROM orders";

    return new Promise((resolve, reject) => {
        connection_create.query(query, (error, results) => {
            if (error) {
                reject(error);
                console.error(error);
            }
            resolve(results);
        });
    });
};

const createOrder = (order) => {
    const { user_foreign, total_price } = order;

    const query = "INSERT INTO orders (user_foreign, total_price, status_order, created_at) VALUES (?, ?, em andamento, NOW())";

    return new Promise((resolve, reject) => {
        connection_create.query(query, [user_foreign, total_price], (error, results) => {
            if (error) {
                reject(error);
                console.error(error);
            }
            resolve(results);
        });
    });
};

export { getAllOrders, createOrder };
