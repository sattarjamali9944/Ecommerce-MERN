const path           = require('path');
const express        = require('express'); 
const router         = express.Router();
// const rootDir    = require('../util/path');  
const multer         = require("multer");
const cors           = require('cors');
const cron           = require('node-cron');
const adminController = require('../server/controllers/AdminController');
const categoryController = require('../server/controllers/CategoryController');
const {addAttribute} = require('../server/controllers/AttributeController');
const {addContactPost} = require('../server/controllers/ContactController');
const {
    userProfile,
    postUpdateProfile,
    addUser,
    createUser,
    signin,
    logout,
    forgetPass,
    forgetPassRequest,
    opt,
    optCreate,
    getUsers,
    uploadUserImageFunction, 
    allUserJson,
} = require('../server/controllers/UserController');
const {
    addProduct,createproduct,
    getProducts,
    productApis,
    ProductCategoryWise,
    cartPost
} = require('../server/controllers/ProductController');
const {
 addBanner,createbanner,getBanner
} = require('../server/controllers/BannerController');
const validationRule = require('../server/middlewares/cat-validation');
//const storage = require('../server/middlewares/multer')
const registerValidationRule = require('../server/middlewares/register-validation');
const {
    isLogin
} = require('../server/middlewares/isLogin');
const {
    authMiddleware
} = require('../server/middlewares/auth');

// set storage
 var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'assets/admin_assets/products/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
})
var upload = multer({ storage: storage })
var storageUser = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'assets/admin_assets/users/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname)
  }
})
var uploadUserImage = multer({ storage: storageUser })
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'assets/admin_assets/banner/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
})
var ban = multer({ storage: storage })
var storagess = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'assets/admin_assets/categories/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname)
  }
})
var cat = multer({ storage: storagess })

/* route for home */
router.get('/', adminController.getLogin);
router.get('/dashboard', adminController.getAdminHome);
router.get('/form', adminController.getAdminForm);
/************* User Controller Route ****************/
router.get('/user-profile', userProfile);
router.post('/user-profile',postUpdateProfile);
router.get('/add-user', addUser);
router.post('/add-user', registerValidationRule.RegisterValidation, createUser);
router.get('/getUsers', getUsers);
router.post('/login',cors(), signin);
router.get('/logout', logout);
router.get('/forget-pass', forgetPass);
router.post('/forgetpass_Create', forgetPassRequest);
router.get('/opt', opt);
router.post('/opt', optCreate);
router.post('/update-image',uploadUserImage.single('image'),uploadUserImageFunction);
router.get('/usersApi',cors(),allUserJson)
/************* Category Controller Routes *************/
router.get('/add-cat', isLogin, categoryController.addCategory);
router.post('/add-cat',cat.single('image'),validationRule.form, categoryController.addCategoryPost);
router.delete('/add-cat/(:id)', categoryController.deleteCat);
router.get('/catApi',cors(),categoryController.allcatJson);

/************* Product Controller Route ****************/
router.get('/add-product', addProduct);
router.get('/products',getProducts);
router.post('/createproduct',upload.single('files'),createproduct);
router.get('/productApi',cors(),productApis)
router.post('/api/cart/',cartPost);
router.get('/api/category/(:categoryId)',cors(),ProductCategoryWise)
/************* Banner Controller Route ****************/
router.get('/add-banner',addBanner);
router.post('/createbanner',ban.single('files'),createbanner);
router.get('/banner',getBanner);
/***********************Attribute Controller */
router.get('/add-attribute',addAttribute);
/************************Contact Controller **********************/
router.post('/api/contact',addContactPost);
module.exports = router;