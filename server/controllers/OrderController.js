const express       = require('express');
const router        = express.Router();
const Order         = require('../models/CartItemShoppingDetail');
const session       = require('express-session');
const { validationResult } = require("express-validator");

const getOrders = async (req,res,) => {
    const  orders = await Order.ShippingDetails.find();
    res.render('admin/orders',{
    pageTitle:'Get Orders',
    orders:orders,
    success:req.flash('success')

    })

};

module.exports = {
    getOrders
}