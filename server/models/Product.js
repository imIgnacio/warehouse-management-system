const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    maxLength: 512,
  },
  image: {
    type: String,
  },
  stock: {
    type: Number,
    required: true,
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
  historicalPrice: {
    type: [{ date: Date, price: Number }],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
