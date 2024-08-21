import express from "express";
import {
  creteOrder,
  delateOrder,
  getAllOrders,
  getMonthlyIncome,
  getSingleOrder,
  updateOrder,
} from "../controler/order.js";
import {
  varifyTokenAndAdmin,
  varifyTokenAndAuthorizetion,
  verifyToken,
} from "../midlware/verifyToken.js";

const routes = express.Router();

routes.post("/createOrder", verifyToken, creteOrder);
routes.get("/", varifyTokenAndAdmin, getAllOrders);
routes.get("/:id", varifyTokenAndAuthorizetion, getSingleOrder);
routes.put("/updateOrder/:id", varifyTokenAndAdmin, updateOrder);
routes.delete("/delateOrder/:id", varifyTokenAndAdmin, delateOrder);
routes.get("/income", varifyTokenAndAdmin, getMonthlyIncome);

export default routes;
