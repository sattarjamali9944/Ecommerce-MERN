const mongoose = require('mongoose');

// CartItem model
const cartItemSchema = new mongoose.Schema({
  orderId: String,
  title: String,
  categoryId: String,
  userId: String,
  price: Number,
  detail: String,
  image: String,
  images: [String],
  rating: [Number],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

// ShippingDetails model
const shippingDetailsSchema = new mongoose.Schema({
  orderId: String,
  name: String,
  address: String,
  paymentMethod: String,
  userId: String,
  orderId: String,
  createdAt: { type: Date, default: Date.now },
});

const ShippingDetails = mongoose.model('ShippingDetails', shippingDetailsSchema);

module.exports = { CartItem, ShippingDetails };
