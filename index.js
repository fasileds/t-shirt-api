import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";
import cartRoutes from "./routes/cart.js";
import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/order.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
const db = async () => {
  try {
    mongoose.connect(process.env.MONGOSE_URL);
    console.log("the db is connected sussfully");
  } catch (error) {
    console.log(error);
  }
};
db();
app.listen(5000, () => {
  console.log("the app is running in port 5000");
});

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/auth", authRoutes);
