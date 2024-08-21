import {
  varifyTokenAndAuthorizetion,
  varifyTokenAndAdmin,
} from "../midlware/verifyToken.js";
import Product from "../moduls/Product.js";

export const createProduct = async (req, res) => {
  try {
    const savedProduct = await Product.create(req.body);
    res.json(savedProduct);
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

export const delateProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json("delated sussfully");
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};
