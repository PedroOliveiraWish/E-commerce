import { getCartService, createCartService, updateCartService, deleteCartService } from "../../services/cart/cartService.js";

const getCartController = async (req, res) => {
    const user_foreign = req.params;

    try {
        const cart = await getCartService(user_foreign);
        return res.status(201).json(cart);
    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: error });
    }
}

const createCartController = async (req, res) => {
    const cart = req.body;

    try {
        const newCart = await createCartService(cart);
        return res.status(201).json(newCart);
    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: error });
    }
}

const updateCartController = async (req, res) => {
    const cart = req.body;

    try {
        const updatedCart = await updateCartService(cart);
         return res.status(201).json(updatedCart);
    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: error });
    }
}

const deleteCartController = async (req, res) => {
    const user_foreign = req.params;

    try {
        const deletedCart = await deleteCartService(user_foreign);
        return res.status(201).json(deletedCart);
    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: error });
    }
}

export { createCartController, getCartController, updateCartController, deleteCartController };