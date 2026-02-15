const path = require('path');
const express = require('express'); 
const router = express.Router();
// const rootDir = require('../util/path');  
const homeController =require('../server/controllers/HomeController');


/* route for home */
router.get('/index',homeController.getHome);

/* route for about */
router.get('/about',homeController.getAbout);

/* route for shop */
router.get('/shops',homeController.getAllShops);

/* route for product */
router.get('/search',homeController.searchs);

/* route for coming-soon */
router.get('/coming-soon',homeController.getComingSoon);

/* route for contact */
router.get('/contact',homeController.getContact);
module.exports = router;