import { getAllOrders, createOrder } from "../../models/orders/orderModel.js";

const getAllOrdersService = async () => {
    const orders = await getAllOrders();

    return orders;
};

const createOrderService = async (order) => {
    const newOrder = await createOrder(order);

    return newOrder;
};

export { getAllOrdersService, createOrderService};