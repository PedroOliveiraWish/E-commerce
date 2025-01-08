import { getCartService, createCartService, updateCartService, deleteCartService } from "../../services/cart/cartService.js";

const getCartController = async (req, res) => {
    const {id} = req.params;

    try { 
        const cart = await getCartService(id);


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
        return res.status(201).json({message: "Cart created successfully", cart: newCart});
    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: error });
    }
}

const updateCartController = async (req, res) => {
    const {id, quantity} = req.body;

    try {
        const updatedCart = await updateCartService(id, quantity);
         return res.status(201).json({newCart: updatedCart, message: "Cart updated successfully"});
    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: error });
    }
}

const deleteCartController = async (req, res) => {
    const {id} = req.params;

    console.log(id)

    try {
        const deletedCart = await deleteCartService(id);
        return res.status(201).json(deletedCart);
    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: error });
    }
}

export { createCartController, getCartController, updateCartController, deleteCartController };