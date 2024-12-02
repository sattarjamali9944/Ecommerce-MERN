const country = require('../models/Country');
const express = require('express');
const router = express.Router();
const  session = require('express-session');
const cors = require('cors');
const {
    body,
    validationResult,
    matchedData
} = require('express-validator'); //validation pio kare
/* get home  */
exports.getHome = async (req,res,next) => {
	const successMessage = req.flash('success');
	try {
    const countries = await country.find();
    res.render('admin/add-country',{
        pageTitle: 'Country Setting',
        currentMenu: "Categories",
        userName:req.session.userName,
        countries,
        successMessage,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
      
};
exports.addCountryPost = async (req, res) => {

    try{
	
	const country_name = req.body.add_country;
    const add_country  = new country({
              country_name: country_name
        });
        add_country.save()
            .then(result => {
                req.flash('success', 'Country is successfully Added');
                res.redirect('/add-countries')
            })
            .catch(err => {
                console.log(err);
            })
    } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
            
}

exports.deleteCountry = async (req, res) => 
{
	
	const id = req.params.id;
    country.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
               res.status(200).send({
               "id":`${id}`, "message" : "Data is successfully deleted"});
             }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}






