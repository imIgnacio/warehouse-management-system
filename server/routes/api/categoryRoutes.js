const Category = require('../../models/Category');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { authMiddleware } = require('../../utils/auth');
const { config } = require('../../config/config');

router.get('/', authMiddleware, async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
