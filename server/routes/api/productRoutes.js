const Product = require('../../models/Product');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { authMiddleware } = require('../../utils/auth');
const { config } = require('../../config/config');

router.get('/', authMiddleware, async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
