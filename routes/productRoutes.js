// routes/productRoutes.js

const express = require('express');
const productModel = require('../models/productModel');

const router = express.Router();

// GET request untuk mendapatkan data produk
router.get('/product', (req, res) => {
  const product = productModel.getProduct();
  res.json(product);
});

// PUT request untuk memperbarui data produk
router.put('/product', (req, res) => {
  const { name, price } = req.body;

  const product = productModel.getProduct();
  product.name = name;
  product.price = price;

  productModel.updateProduct(product);

  res.json(product);
});

// DELETE request untuk menghapus data produk
router.delete('/product', (req, res) => {
  const product = productModel.getProduct();

  productModel.deleteProduct();

  res.json({ message: 'Product deleted successfully.' });
});

module.exports = router;
