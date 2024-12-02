const express = require('express'); 
const router = express.Router();
const countryController =require('../server/controllers/CountryController');


/* route for country */
router.get('/add-countries',countryController.getHome);
router.post('/add-countries',countryController.addCountryPost);
router.delete('/add-countries/(:id)',countryController.deleteCountry);

module.exports = router;