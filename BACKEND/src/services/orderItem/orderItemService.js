import { getAllOrderItem, createOrderItem } from "../../models/orderItem/orderItemModel.js";

const getAllOrderItemService = async (order_foreign) => {
    const orderItems = await getAllOrderItem(order_foreign);

    return orderItems;
};

const createOrderItemService = async (orderItem) => {
    const newOrderItem = await createOrderItem(orderItem);

    return newOrderItem;
};

export { getAllOrderItemService, createOrderItemService };