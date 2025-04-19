import express from "express";
import productsModel from "../models/productsModel.js";

const router = express.Router(); 


router.post("/products", async (req, res) => {
  try {
    const product = req.body; // Extract the product data from the request body

    // Create the product in the 'products' database
    await productsModel.create(product);

    res.status(201).send({ message: "Product Created Successfully" });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).send({ message: "Error Creating Product", error: error.message });
  }
});

export default router;
