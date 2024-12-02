const Product = require('../models/Product');
/* get home  */
exports.getHome = (req,res,next) => {
    res.render('user/dashboard',{
        pageTitle:'Home',
        currentMenu:"home",
    });  
};

/* get about  */
exports.getAbout = (req,res,next) => {
    res.render('user/about',{
        pageTitle:'About',
        currentMenu:"about",
    })
};

/* get all shops */
exports.getAllShops = (req,res,next) => {
    res.render('user/shops',{
        pageTitle:'Shops',
        currentMenu:"shop",
    });
};

/* save product */
exports.saveProduct = (req,res,next) => {
    const title         = req.body.title;
    const imageUrl      = req.body.imageUrl;
    const price         = req.body.price;
    const description   = req.body.description;
    const product       = new Product({
        title: title,
        price: price,
        description: description,
        imageUrl: imageUrl
    });
    product.save()
        .then(result=>{
            console.log(result);
            res.redirect('/get-allProducts')
        })
        .catch(err=>{
            console.log(err);
        })

};

/* get all products */
exports.getAllProducts = async (req,res,next) => {
    await Product.find().then(products =>{
        console.log(products);
        res.setHeader('Content-Type', 'application/json');
        res.render('user/products',{
            pageTitle:'Products',
            currentMenu:"product",
        });
        
    }); 
};
/* get coming-soon */
exports.getComingSoon = (req,res,next) => {
    res.render('user/coming-soon',{
        pageTitle:'Coming-Soon',
        currentMenu:"coming-soon",
    });
};
/* get Contact */
exports.getContact = (req,res,next) => {
    res.render('user/contact',{
        pageTitle:'Contact',
        currentMenu:"contact",
    });
};