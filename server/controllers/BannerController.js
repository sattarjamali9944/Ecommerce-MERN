const express       = require('express');
const router        = express.Router();
const Banner        = require('../models/Banner');
const session       = require('express-session');
const { validationResult } = require("express-validator");

const addBanner = async (req, res, next) => {
const errors = req.flash('errors'); // Retrieve flash errors
res.render('admin/add-banner', {
        pageTitle : 'Add Banner',
		    errors,
    });

};
const createbanner = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      req.flash('errors', errors.array());
	  return res.redirect('/add-banner');
  }

	const { title,  detail } = req.body;
	const image = `admin_assets/banner/${req.file.filename}`;

	try {
		const banner = new Banner({ title, image, detail });
		try {
			await banner.save();
			console.log('Banner saved successfully');
		} catch (err) {
			console.error('Error saving banner:', err);
		}
		req.flash('success', 'Banner successfully added');
		return res.redirect('/banner');
	} catch (err) {
		req.flash('errors', ['Failed to add banner']);
		res.redirect('/add-banner');
	}
  
};
const getBanner = async (req,res,) => {
        const banneres = await  Banner.find();
        res.render('admin/banners',{
        pageTitle:'Get Banner',
        banners:banneres,
        success:req.flash('success')

        })
 
};
module.exports = {
    addBanner,
    createbanner,
    getBanner
}

