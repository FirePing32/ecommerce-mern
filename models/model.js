const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  brandName: {
    type: String,
    required: [true, 'brandName is required'],
  },
  description: {
    type: String,
    required: [true, 'description is required'],
  },
  images: [{
    type: String,
    required: [true, 'Image URL is required'],
    unique: true
  }],
  options: [{
      type: String,
      required: [true, 'Color is required'],
  }],
  productId: {
    type: String,
    default: () => new mongoose.Types.ObjectId()
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
  rating: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: 1,
    max: 5
  }
});

const product = mongoose.model('product', productSchema);
module.exports = product;