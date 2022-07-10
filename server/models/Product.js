const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    maxLength: 256,
  },
  image: {
    type: String,
  },
  buyPrice: {
    type: Number,
    required: true,
    min: 1,
  },
  sellPrice: {
    type: Number,
    required: true,
    min: 1,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
