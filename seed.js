import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

const products = [
  { 
    name:"Wireless Headphones", 
    cat:"Electronics", 
    price:79.99, 
    rating:4.5, 
    badge:"hot", 
    emoji:"🎧",
    image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"
  },
  { 
    name:"Running Shoes", 
    cat:"Sports", 
    price:54.99, 
    rating:4.2, 
    badge:"sale", 
    emoji:"👟",
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop"
  },
  { 
    name:"Cotton T-Shirt", 
    cat:"Clothing", 
    price:19.99, 
    rating:4.0, 
    badge:null, 
    emoji:"👕",
    image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop"
  },
  { 
    name:"Smart Watch", 
    cat:"Electronics", 
    price:129.99, 
    rating:4.7, 
    badge:"new", 
    emoji:"⌚",
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"
  },
  { 
    name:"Desk Lamp", 
    cat:"Home", 
    price:34.99, 
    rating:4.3, 
    badge:null, 
    emoji:"💡",
    image:"https://m.media-amazon.com/images/I/41Dz6f+KGZL._SX342_SY445_QL70_FMwebp_.jpg"
  },
  { 
    name:"JavaScript Book", 
    cat:"Books", 
    price:29.99, 
    rating:4.6, 
    badge:"new", 
    emoji:"📘",
    image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop"
  },
  { 
    name:"Yoga Mat", 
    cat:"Sports", 
    price:24.99, 
    rating:4.1, 
    badge:null, 
    emoji:"🧘",
    image:"https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop"
  },
  { 
    name:"Coffee Mug", 
    cat:"Home", 
    price:14.99, 
    rating:4.4, 
    badge:"hot", 
    emoji:"☕",
    image:"https://m.media-amazon.com/images/I/51faXrq-8TL._SX679_.jpg"
  },
  { 
    name:"Denim Jacket", 
    cat:"Clothing", 
    price:64.99, 
    rating:4.3, 
    badge:"sale", 
    emoji:"🧥",
    image:"https://m.media-amazon.com/images/I/51aa6X0QOmL._AC_UL480_FMwebp_QL65_.jpg"
  },
  { 
    name:"Bluetooth Speaker", 
    cat:"Electronics", 
    price:49.99, 
    rating:4.5, 
    badge:null, 
    emoji:"🔊",
    image:"https://m.media-amazon.com/images/I/71AgwyfSs-L._AC_UY327_FMwebp_QL65_.jpg"
  },
  { 
    name:"The Alchemist", 
    cat:"Books", 
    price:12.99, 
    rating:4.8, 
    badge:null, 
    emoji:"📖",
    image:"https://m.media-amazon.com/images/I/51faXrq-8TL._SX679_.jpg"
  },
  { 
    name:"Ceramic Vase", 
    cat:"Home", 
    price:39.99, 
    rating:4.2, 
    badge:"new", 
    emoji:"🏺",
    image:"https://m.media-amazon.com/images/I/51gi4BIqWhL._AC_UL480_FMwebp_QL65_.jpg"
  },
];

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");

  await Product.deleteMany(); // clear existing products first
  await Product.insertMany(products);
  console.log("Products inserted!");

  mongoose.connection.close();
}

seed();