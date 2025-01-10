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

const getOrderByID = (user_foreign) => {
  const query = "SELECT * FROM orders WHERE user_foreign = ?";

  return new Promise((resolve, reject) => {
    connection_create.query(query, user_foreign, (error, results) => {
      if (error) {
        console.error(error);
        return reject(error);
      }

      resolve(results);
    });
  });
};

const createOrder = (order) => {
  const { user_foreign, total_price } = order;

  const query =
    "INSERT INTO orders (user_foreign, total_price, created_at) VALUES (?, ?, NOW())";

  return new Promise((resolve, reject) => {
    connection_create.query(
      query,
      [user_foreign, total_price],
      (error, results) => {
        if (error) {
          console.error(error);
          return reject(error);
        }
        resolve(results);
      }
    );
  });
};

const updateOrder = (id) => {
  const query =
    "UPDATE orders SET status_order = 'success' WHERE id = ?";

  return new Promise((resolve, reject) => {

    connection_create.query(query, [id], (error, results) => {
      if (error) {
        console.error(error);
        return reject(error);
      }
      resolve(results);
    });
  });
};

const deleteOrder = (user_foreign) => {
  const { id } = user_foreign;

  const query = "DELETE FROM orders WHERE user_foreign = ?";

  return new Promise((resolve, reject) => {
    connection_create.query(query, [id], (error, results) => {
      if (error) {
        console.error(error);
        return reject(error);
      }

      resolve(results);
    });
  });
};

export { getAllOrders, getOrderByID, createOrder, updateOrder, deleteOrder };
