import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  size: {
    type: Array,
    required: true,
  },
  catagories: {
    type: Array,
    required: true,
  },
  color: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("Product", productSchema);
