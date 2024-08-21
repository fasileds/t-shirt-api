import express from "express";
import { logIn, Register } from "../controler/auth.js";

const routes = express.Router();

routes.post("/login", logIn);
routes.post("/register", Register);

export default routes;
