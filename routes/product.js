import express from "express";
import {
  createProduct,
  delateProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from "../controler/product.js";
import { varifyTokenAndAdmin } from "../midlware/verifyToken.js";

const routes = express.Router();

routes.post("/createProduct", varifyTokenAndAdmin, createProduct);
routes.get("/", getAllProducts);
routes.get("/:id", getSingleProduct);
routes.put("/updateProduct/:id", varifyTokenAndAdmin, updateProduct);
routes.delete("/delateProduct/:id", varifyTokenAndAdmin, delateProduct);

export default routes;
