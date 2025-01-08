import express from "express";
import cors from "cors";

import userRoutes from "../src/routes/users/userRoutes.js";
import productRoutes from "../src/routes/product/productRoutes.js";
import orderRoutes from "../src/routes/order/orderRoutes.js";
import cartRoutes from "../src/routes/cart/cartRoutes.js";

import { connection_database } from "./database.js";

connection_database();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/carts", cartRoutes);


app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})