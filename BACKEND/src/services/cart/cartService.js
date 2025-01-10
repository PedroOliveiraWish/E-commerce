import {
  getCart,
  createCart,
  updateCart,
  deleteCart,
  empityCart
} from "../../models/cart/cartModel.js";

const getCartService = async (user_foreign) => {
  const cart = await getCart(user_foreign);

  return cart;
};

const createCartService = async (cart) => {
  const cartItem = await createCart(cart);

  return cartItem;
};

const deleteCartService = async (id) => {
  console.log("\nSERVICE")
  console.log(id)

  const result = await deleteCart(id);

  return result;
};

const updateCartService = async (id, quantity) => {
    const updatedCart = await updateCart(id, quantity);

    return updatedCart;
};

const emptyCartService = async (user_foreign) => {
  const result = await empityCart(user_foreign);

  return result
}

export { getCartService, createCartService, deleteCartService, updateCartService, emptyCartService };

