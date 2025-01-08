import { connection_create } from "../../database.js";

const getCart = (user_foreign) => {
    const query = `
    SELECT 
        c.id AS cart_id,
        c.user_foreign,
        c.quantity,
        p.id AS product_id,
        p.product_name,
        p.product_description,
        p.price,
        p.stock,
        p.category,
        p.image_url
    FROM cart c
    JOIN products p ON c.product_foreign = p.id
    WHERE c.user_foreign = ?;
`;

  return new Promise((resolve, reject) => {
    connection_create.query(query, [user_foreign], (error, results) => {
      if (error) {
        reject(error);
        console.error(error);
      } else {
        resolve(results);
      }
    });
  });
};

const createCart = (cart) => {
  const { user_foreign, product_foreign, quantity } = cart;

  const query =
    "INSERT INTO cart (user_foreign, product_foreign, quantity) VALUES (?, ?, ?)";

  return new Promise((resolve, reject) => {
    connection_create.query(
      query,
      [user_foreign, product_foreign, quantity],
      (error, results) => {
        if (error) {
          reject(error);
          console.error(error);
        }
        resolve(results);
      }
    );
  });
};

const deleteCart = (id) => {
  const query = "DELETE FROM cart WHERE id = ?";

  console.log('\nMODEL')
  console.log(id)

  return new Promise((resolve, reject) => {
    connection_create.query(query, [id], (error, results) => {
      if (error) {
        reject(error);
        console.error(error);
      }
      resolve(results);
    });
  });
};

const updateCart = (id, quantity) => {

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
