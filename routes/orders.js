import express from "express";
import Order from "../models/Order.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

// POST /api/orders — place an order (protected)
router.post("/", authMiddleware, async (req, res) => {
  const { items, address, totalPrice } = req.body;

  try {
    const order = await Order.create({
      user: req.userId,
      items,
      address,
      totalPrice,
      status: "placed",
    });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: "Could not place order" });
  }
});

// GET /api/orders/myorders — get logged in user's orders (protected)
router.get("/myorders", authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch orders" });
  }
});

export default router;