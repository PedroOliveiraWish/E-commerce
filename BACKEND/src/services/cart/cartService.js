import {
  getCart,
  createCart,
  updateCart,
  deleteCart,
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
  const result = await deleteCart(id);

  return result;
};

const updateCartService = async (cart) => {
    const updatedCart = await updateCart(cart);

    return updatedCart;
};

export { getCartService, createCartService, deleteCartService, updateCartService };

