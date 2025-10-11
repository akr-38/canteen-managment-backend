import { Request, Response } from "express";
import prisma from "../prisma/client.js";

// Signup

// Login

// Get Orders of User
export const getUserOrders = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId!, 10);
    const orders = await prisma.order.findMany({
      where: { customer_id: userId },
      include: { items: true },
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders", details: err });
  }
};
