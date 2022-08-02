const Product = require('../../models/Product');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { authMiddleware } = require('../../utils/auth');
const { config } = require('../../config/config');

// Get all Products
router.get('/', authMiddleware, async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({ total: products.length, products });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Post new Product
router.post('/', authMiddleware, async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      res.status(400).json({ message: 'No Information Provided' });
      return;
    }

    const product = await Product.create(req.body);

    res.status(200).json({ product });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one Product by Id
router.get('/:productId', authMiddleware, async (req, res) => {
  try {
    const product = await Product.findById({ _id: req.params.productId });

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete one Product by Id
router.delete('/:productId', authMiddleware, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete({
      _id: req.params.productId,
    });

    res.status(200).json({ message: 'Product Deleted Successfully', product });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
