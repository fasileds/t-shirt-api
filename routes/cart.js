import express from "express";
import {
  createCart,
  delateCart,
  getAllCarts,
  getuserCart,
  updateCart,
} from "../controler/cart.js";
import {
  varifyTokenAndAdmin,
  varifyTokenAndAuthorizetion,
  verifyToken,
} from "../midlware/verifyToken.js";

const routes = express.Router();

routes.post("/createCart", verifyToken, createCart);
routes.get("/", varifyTokenAndAdmin, getAllCarts);
routes.get("/:id", varifyTokenAndAuthorizetion, getuserCart);
routes.put("/updateCart/:id", varifyTokenAndAuthorizetion, updateCart);
routes.delete("/delateCart/:id", varifyTokenAndAuthorizetion, delateCart);

export default routes;
