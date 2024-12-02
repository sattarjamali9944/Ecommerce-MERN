
const Product     = require('../models/Product');
const Users       = require('../models/User');
const Roles       = require('../models/Role');
const Categories  = require('../models/Category')


/*get login*/
exports.getLogin = (req,res,next) => {
    res.render('admin/login',{
        pageTitle:'login',
        currentMenu:"login",
    });  
};
/*Form Section*/

exports.getAdminForm = (req,res,next) => {
    res.render('admin/form-validations',{
        pageTitle:'Form',
        currentMenu:"Form",
    });  
};
/* get home  */


exports.getAdminHome  =  async (req,res,next) => {
    const count       = await  Product.countDocuments();
	const userCount   = await  Users.countDocuments();
	const roleCount   = await  Roles.countDocuments();
	const countCat    = await  Categories.countDocuments();
	const Products    = await  Product.find();
    const Userss      = await  Users.find();
	const genderGroup = await  Users.aggregate([
    {
		$group: {
		  _id: "$gender",
		  count: { $sum: 1 }
		}
    }
   ]);
   const data = JSON.stringify(genderGroup);

	res.render('admin/index',{
        pageTitle:'Dashboard',
        currentMenu:"Index",
		count:count,
		userCount:userCount,
		roleCount:roleCount,
		countCat:countCat,
        products:Products,
        users:Userss,
        genderGroup:genderGroup,
        data:data,
		
    });  
};










