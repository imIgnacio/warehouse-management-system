const Product = require('../../models/Product');
const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');

// Get all Products
router.get('/', authMiddleware, async (req, res) => {
  try {
    const { limit } = req.query;
    let products;

    limit
      ? (products = await Product.find().limit(limit))
      : (products = await Product.find());

    return res.status(200).json({ total: products.length, products });
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Post new Product
router.post('/', authMiddleware, async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: 'No Information Provided' });
    }

    const product = await Product.create({
      ...req.body,
      historicalPrice: [{ date: new Date(), price: req.body.buyPrice }],
    });

    return res.status(200).json({ product });
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Get one Product by Id
router.get('/:productId', authMiddleware, async (req, res) => {
  try {
    const product = await Product.findById({ _id: req.params.productId });

    if (!product) {
      return res.status(400).json({ message: 'No Product Found' });
    }

    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Delete one Product by Id
router.delete('/:productId', authMiddleware, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete({
      _id: req.params.productId,
    });

    if (!product) {
      return res.status(400).json({ message: 'No Product Found' });
    }

    return res
      .status(200)
      .json({ message: 'Product Deleted Successfully', product });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
