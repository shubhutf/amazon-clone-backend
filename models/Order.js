import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      productId: String,
      name: String,
      emoji: String,
      price: Number,
      quantity: Number,
    }
  ],
  address: {
    fullName: String,
    phone: String,
    street: String,
    city: String,
    state: String,
    pincode: String,
  },
  totalPrice: Number,
  status: { type: String, default: "placed" },
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);