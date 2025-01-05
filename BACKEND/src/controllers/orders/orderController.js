import { getAllOrdersService, createOrderService } from "../../services/order/orderService.js";
import { createOrderItemService } from "../../services/orderItem/orderItemService.js";

const getAllOrdersController = async (req, res) => {
  try {
    const orders = await getAllOrdersService();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching orders" });
  }
};

const createOrderWithItemsController = async (req, res) => {
  const order = req.body;

  const order_create = {
    user_foreign: order.user_foreign,
    total_price: order.total_price,
  };

  try {
    const newOrder = await createOrderService(order_create);
    const orderId = newOrder.insertId;

    for (const item of order.items) {
      const newOrderItem = {
        order_foreign: orderId,
        product_foreign: item.product_foreign,
        quantity: item.quantity,
      };

      await createOrderItemService(newOrderItem);
    }

    res.status(201).json({ message: "Pedido criado com sucesso!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating order" });
  }
};

export { getAllOrdersController, createOrderWithItemsController };