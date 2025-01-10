import {
  getAllOrdersService,
  getOrderByIDService,
  createOrderService,
  updateOrderService,
  deleteOrderService
} from "../../services/order/orderService.js";
import { createOrderItemService } from "../../services/orderItem/orderItemService.js";
import { emptyCartService } from "../../services/cart/cartService.js";

const getAllOrdersController = async (req, res) => {
  try {
    const orders = await getAllOrdersService();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching orders" });
  }
};

const getOrderByIDController = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await getOrderByIDService(id);
    res.json(order);
  } catch (error) {
    console.error(error);
  }
};

const createOrderWithItemsController = async (req, res) => {
  const { user_foreign, price, carts } = req.body;

  const order_create = {
    user_foreign: user_foreign,
    total_price: price,
  };
  try {

    const newOrder = await createOrderService(order_create);
    const orderId = newOrder.insertId;

    for (const cart of carts) {
      const newOrderItem = {
        order_foreign: orderId,
        product_foreign: cart.product_id,
        quantity: cart.quantity,
      };

      await createOrderItemService(newOrderItem);
      await emptyCartService(user_foreign)
    }

    res.status(201).json({ message: "Pedido criado com sucesso!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating order" });
  }
};

const updateOrderController = async (req, res) => {
  const {id}  = req.body;
  console.log(id)

  try {
    await updateOrderService(id);
    res.status(200).json({ message: "Order updated successfully" });
  } catch (error) {
    console.error(error);
  }
};

const deleteOrderController = async (req, res) => {
  const user_foreign = req.params;

  try {
     await deleteOrderService(user_foreign);
     res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error(error);
  }
}

export {
  getAllOrdersController,
  getOrderByIDController,
  createOrderWithItemsController,
  updateOrderController,
  deleteOrderController
};
