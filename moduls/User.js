import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  emaile: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  addrase: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("User", userSchema);
