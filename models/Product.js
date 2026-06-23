import mongoose from "mongoose";

// This defines the shape/structure of a product in the database
const productSchema = new mongoose.Schema({
  name:   { type: String, required: true },
  cat:    { type: String, required: true },
  price:  { type: Number, required: true },
  rating: { type: Number, default: 0 },
  badge:  { type: String, default: null },
  emoji:  { type: String },
  image:  { type: String },
});

const Product = mongoose.model("Product", productSchema);

export default Product;