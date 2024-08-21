import Cart from "../moduls/Cart.js";
import {
  verifyToken,
  varifyTokenAndAuthorizetion,
  varifyTokenAndAdmin,
} from "../midlware/verifyToken.js";

export const createCart = async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    res.json(cart);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

export const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.json(carts);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
export const getuserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.json(cart);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

export const updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedCart);
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

export const delateCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json("deleted scssfully");
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
