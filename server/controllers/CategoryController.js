const express     = require('express');
const category    = require('../models/Category');
const session     = require('express-session');
const cors        = require('cors');
const multer      = require('multer')

const {
    body,
    validationResult,
    matchedData
} = require('express-validator'); //validation pio kare

/*For Category*/
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'assets/admin_assets/categories/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
})
var cat = multer({ storage: storage })
exports.addCategory = async  (req, res, next) => {
    const successMessage = req.flash('success');
    
    await category.find().then(cats =>{
        
        res.render('admin/add-cat', {
        pageTitle: 'Categories Setting',
        currentMenu: "Categories",
        userName:req.session.userName,
        cats,
        successMessage,
    });
    });

};
exports.addCategoryPost = async (req, res) => {
    const successMessage = req.flash('success');
    const cats = await  category.find();
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        var errMsg = errors.mapped();
        var inputData = matchedData(req);
        res.render('admin/add-cat', {
            pageTitle: 'Categories Setting',
            errors: errMsg,
            inputData: inputData,
            successMessage,
            cats,
        });

    } else {
       
        let cat_name = req.body.add_cat;
        let imgUrl = "";
        if (req.file) {
             imgUrl = `admin_assets/categories/${req.file.filename}`;
            
        }
       const add_cat = new category({
            cat_name: cat_name, // Ensure you're using the correct field name from your schema
            image: imgUrl
        });
        
        // Save the category to the database
        add_cat.save()
            .then(result => {
                console.log(result);
                req.flash('success', 'Category is successfully Added');
                res.redirect('/add-cat');
            })
            .catch(err => {
                console.log(err);
            });
        
   };

}


exports.deleteCat = (req, res)=>{
    const id = req.params.id;
    category.findByIdAndDelete(id)
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

exports.allcatJson = async (req, res) =>
{
	try {
    const categories = await category.find();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}