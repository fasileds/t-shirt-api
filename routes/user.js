import express from "express";
import {
  delateUser,
  getAllUser,
  getSingleUser,
  getUserStatuses,
  updateUser,
} from "../controler/user.js";
import {
  varifyTokenAndAdmin,
  varifyTokenAndAuthorizetion,
} from "../midlware/verifyToken.js";

const routes = express.Router();

routes.get("/", varifyTokenAndAdmin, getAllUser);
routes.get("/find/:id", varifyTokenAndAuthorizetion, getSingleUser);
routes.get("/states", varifyTokenAndAdmin, getUserStatuses);
routes.put("/updateUser/:id", varifyTokenAndAuthorizetion, updateUser);
routes.delete("/delate/:id", varifyTokenAndAuthorizetion, delateUser);

export default routes;
