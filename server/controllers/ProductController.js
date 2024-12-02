const express    = require("express");
const session    = require("express-session");
const multer     = require("multer"); // Image uploading
const path       = require("path"); // Node.js built-in module
const cors       = require("cors"); // CORS for APIs
const cron       = require("node-cron"); // Email scheduler
const nodemailer = require("nodemailer"); // Nodemailer for sending emails
const crypto     = require("crypto"); // For generating random strings
const { validationResult } = require("express-validator");


// Models
const Products = require("../models/Product");
const Category = require("../models/Category");
const attribute = require("../models/Attributes");
const { CartItem, ShippingDetails } = require("../models/CartItemShoppingDetail");
// Helper function to generate orderId
const generateOrderId = () => `ORD-${crypto.randomBytes(8).toString('hex')}`;

const addProduct = async (req, res) => {
  const getAttributes = await attribute.find({
    $and: [
      { status: "active" },
      { userId: req.session.userId }
    ]
  });

  const cats = await Category.find();
  const errors = req.flash('errors'); // Retrieve flash errors
  

  res.render("admin/add-product", {
    pageTitle: "Add Product",
    catgories: cats,
    getAttributes,
    errors,
    userId: req.session.userId,
  });
};



const createProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      req.flash('errors', errors.array());
    
      return res.redirect('/add-product');
  }

  const { title, categoryId, price, detail, userId,attribute,subattribute,qty,salepercent,warranty } = req.body;
  const image = `admin_assets/products/${req.file.filename}`;

  try {
      const product = new Products({ title, image, categoryId, price, detail, userId,attribute,subattribute,qty,salepercent,warranty});
      try {
          await product.save();
          console.log('Product saved successfully');
      } catch (err) {
          console.error('Error saving product:', err);
      }
      req.flash('success', 'Product successfully added');
      return res.redirect('/products');
  } catch (err) {
      req.flash('errors', ['Failed to add product']);
      res.redirect('/add-product');
  }
};
const getProducts = async (req, res) => {
  try {
    const products = await Products.find();//.limit(2);
    
    res.render("admin/products", {
      pageTitle: "Add Product",
      products: products,
      errors: "",
      success:req.flash('success'),
    });
  } catch (error) {
    console.log(error);
  }
};
const productApis = async (req, res, next) => {
  try {
    // Perform the aggregation and await the result
    const products = await Products.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "categoryId",
          foreignField: "_id",
          as: "cat_info",
        },
      },
    ]);

    // Send the products as a JSON response
    res.json(products);
  } catch (error) {
    // Handle and log the error
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const cartPost = async (req, res, next) => {
  if (!req.session.orderId) {
    // Generate and set orderId in the session
    req.session.orderId = generateOrderId();
  }
  

  try {
    const { cartItems, shippingDetails } = req.body;
    const savedItems = await Promise.all(
      cartItems.map(async (item) => {
        const newItem = new CartItem({ ...item, orderId:req.session.orderId }); // Assign orderId to each cart item
        return await newItem.save();
      })
    );

    // Save shipping details to the database
    const shipping = new ShippingDetails({
      ...shippingDetails,
      orderId: req.session.orderId,
    });
    const savedShipping = await shipping.save();

    res.status(201).json({
      message: 'Checkout successful',
      orderId: savedShipping.orderId,
      cartItems: savedItems,
      shippingDetails: savedShipping,
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }

}

const ProductCategoryWise = async (req, res ) => {
  const { categoryId } = req.params;
  

  try {
    // Find products where the categoryId matches the provided one
    const products = await Products.find({ categoryId });

    if (!products || products.length === 0) {
      return res.status(404).json({ message: 'No products found for this category' });
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }

}
module.exports = {
  addProduct,
  createProduct,
  getProducts,
  productApis,
  ProductCategoryWise,
  cartPost
};
