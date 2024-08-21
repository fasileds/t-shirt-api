import mongoose from "mongoose";

const ordeSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  product: [
    {
      productId: {
        type: String,
      },
      quntity: {
        type: Number,
        default: 1,
      },
    },
  ],
  amount: {
    type: Number,
    required: true,
  },
  statuse: {
    type: String,
    default: "pandding",
  },
  addrase: {
    type: Object,
    required: true,
  },
});

export default mongoose.model("Order", ordeSchema);
