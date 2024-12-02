const path = require('path');
const express = require('express'); 
const router = express.Router();
const multer = require("multer");
const cors = require('cors');
const adminController = require('../server/controllers/AdminController');
const categoryController = require('../server/controllers/CategoryController');
const { addAttribute,createAttribute } = require('../server/controllers/AttributeController');
const { addContactPost } = require('../server/controllers/ContactController');
const userController = require('../server/controllers/UserController');
const productController = require('../server/controllers/ProductController');
const bannerController = require('../server/controllers/BannerController');
const orderController = require('../server/controllers/OrderController');
const validationRule = require('../server/middlewares/cat-validation');
const registerValidationRule = require('../server/middlewares/register-validation');
const { isLogin } = require('../server/middlewares/isLogin');
const { authMiddleware } = require('../server/middlewares/auth');
const { body, validationResult } = require('express-validator');
// Utility function to generate multer storage dynamically based on the folder
const createMulterStorage = (folder) => multer.diskStorage({
  destination: (req, file, cb) => cb(null, `assets/admin_assets/${folder}/`),
  filename: (req, file, cb) => cb(null, Date.now() + file.originalname)
});

// Multer configurations for different uploads
const uploadProductImage = multer({ storage: createMulterStorage('products') });
const uploadUserImage = multer({ storage: createMulterStorage('users') });
const uploadBannerImage = multer({ storage: createMulterStorage('banner') });
const uploadCategoryImage = multer({ storage: createMulterStorage('categories') });

/* Home Routes */
router.get('/', adminController.getLogin);
router.get('/dashboard', adminController.getAdminHome);
router.get('/form', adminController.getAdminForm);

/************* User Controller Routes ****************/
router.get('/user-profile', userController.userProfile);
router.post('/user-profile', userController.postUpdateProfile);
router.get('/add-user', userController.addUser);
router.post('/add-user', registerValidationRule.RegisterValidation, userController.createUser);
router.get('/getUsers', userController.getUsers);
router.post('/login', cors(), userController.signin);
router.get('/logout', userController.logout);
router.get('/forget-pass', userController.forgetPass);
router.post('/forgetpass_Create', userController.forgetPassRequest);
router.get('/opt', userController.opt);
router.post('/opt', userController.optCreate);
router.post('/update-image', uploadUserImage.single('image'), userController.uploadUserImageFunction);
router.get('/usersApi', cors(), userController.allUserJson);

/************* Category Controller Routes *************/
router.get('/add-cat', isLogin, categoryController.addCategory);
router.post('/add-cat', uploadCategoryImage.single('image'), validationRule.form, categoryController.addCategoryPost);
router.delete('/add-cat/:id', categoryController.deleteCat);
router.get('/catApi', cors(), categoryController.allcatJson);

/************* Product Controller Routes ****************/
router.get('/add-product', productController.addProduct);
router.get('/products', productController.getProducts);
router.post('/createProduct', uploadProductImage.single('files'), [
  body('title').isLength({ min: 3 }).withMessage('Title must be at least 3 characters long'),
  body('categoryId').notEmpty().withMessage('Category ID is required'),
  body('price').isNumeric().withMessage('Price must be a number'),
  body('detail').notEmpty().withMessage('Detail is required')
],productController.createProduct);


router.get('/productApi', cors(), productController.productApis);
router.post('/api/cart/', productController.cartPost);
router.get('/api/category/:categoryId', cors(), productController.ProductCategoryWise);

/************* Banner Controller Routes ****************/
router.get('/add-banner', bannerController.addBanner);
router.post('/createbanner', uploadBannerImage.single('files'), 
[
  body('title').isLength({ min: 3 }).withMessage('Title must be at least 3 characters long'),
 
  body('detail').notEmpty().withMessage('Detail is required')
],
bannerController.createbanner);
router.get('/banner', bannerController.getBanner);

/************* Attribute Controller Route ****************/
router.get('/add-attribute', addAttribute);
router.post('/add-attribute',createAttribute)
/****************OrderController ****************** */
router.get('/orders',orderController.getOrders);

/************* Contact Controller Route ****************/
router.post('/api/contact', addContactPost);

module.exports = router;
