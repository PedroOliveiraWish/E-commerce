import {
  getAllOrders,
  getOrderByID,
  createOrder,
  updateOrder,
  deleteOrder
} from "../../models/orders/orderModel.js";

const getAllOrdersService = async () => {
  const orders = await getAllOrders();

  return orders;
};

const getOrderByIDService = async (id) => {
  const order = await getOrderByID(id);
  return order;
};

const createOrderService = async (order) => {
  const newOrder = await createOrder(order);

  return newOrder;
};

const updateOrderService = async (id) => {

  const order = await updateOrder(id);

  return order;
};

const deleteOrderService = async (user_foreign) => {
    const order = await deleteOrder(user_foreign);
    return order;
}

export { getAllOrdersService, getOrderByIDService, createOrderService, updateOrderService, deleteOrderService };
