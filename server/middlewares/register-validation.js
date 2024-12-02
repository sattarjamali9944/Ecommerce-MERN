const { check, validationResult }= require('express-validator');
exports.RegisterValidation=[
  // first Name validation
   check('full_name').trim().notEmpty().withMessage('First Name required')
   .matches(/^[a-zA-Z ]*$/).withMessage('Only Characters with white space are allowed'),
   check('email').notEmpty().withMessage('Email Address required').normalizeEmail().isEmail().withMessage('must be a valid email'),
   check('phone').trim().notEmpty().withMessage('Phone is rquired'),
   check('password').trim().notEmpty().withMessage('Password required')
   .isLength({ min: 5 }).withMessage('password must be minimum 5 length')
   .matches(/(?=.*?[A-Z])/).withMessage('At least one Uppercase')
   .matches(/(?=.*?[a-z])/).withMessage('At least one Lowercase')
   .matches(/(?=.*?[0-9])/).withMessage('At least one Number')
   .matches(/(?=.*?[#?!@$%^&*-])/).withMessage('At least one special character')

];
