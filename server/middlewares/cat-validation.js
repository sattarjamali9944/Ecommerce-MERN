const { body, validationResult }= require('express-validator');
exports.form=[
  // first Name validation
   body('add_cat').trim().notEmpty().withMessage('Category name is rquired'),
  // body('add_cat').trim().notEmpty().isInt().withMessage('Category name is '),
 
 
]