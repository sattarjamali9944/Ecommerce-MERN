const User = require('../models/User');
const Product = require('../models/Product');
const Country = require('../models/Country');

async function fetchData(req, res, next) {
  try {
    const users = await User.find();
    res.locals.users = users;
    const products = await Product.find().limit(5);
    res.locals.productss = products;
    const countries = await Country.find();
    res.locals.countries = countries;
    next();
  } catch (error) {
    console.error('Error fetching data:', error);
    res.locals.users = [];
    res.locals.products = [];
    res.locals.countries = [];
    next(error);
  }
}


module.exports = fetchData;
