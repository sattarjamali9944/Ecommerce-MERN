const Product = require("../models/Product");
const Users = require("../models/User");
const Roles = require("../models/Role");
const Categories = require("../models/Category");
const db = require("../../db");
const bcrypt = require("bcrypt");

/*get login*/
exports.getLogin = (req, res, next) => {
	res.render("admin/login", {
		pageTitle: "login",
		currentMenu: "login",
	});
};
/*Form Section*/

exports.getAdminForm = (req, res, next) => {
	res.render("admin/form-validations", {
		pageTitle: "Form",
		currentMenu: "Form",
	});
};
/* get home  */

exports.logins = (req, res) => {
	//const { email, password } = req.body;
	const email = req.body["singin-email"]?.trim();
	const password = req.body["singin-password"]?.trim();

	db.query(
		"SELECT * FROM users WHERE email = ?",
		[email],
		async (err, result) => {
			if (err) {
				return res.status(500).json({
					success: false,
					message: "Database error",
				});
			}

			if (result.length === 0) {
				return res.status(401).json({
					success: false,
					message: "Invalid credentials-1",
				});
			}

			const user = result[0];
			console.log(user);
			const match = await bcrypt.compare(password, user.password);
            console.log(match);
			console.log("REQ PASSWORD:", password);
			console.log("TYPE:", typeof password);
			console.log("HASH FROM DB:", user.password);

			if (!match) {
				return res.status(401).json({
					success: false,
					message: "Invalid credentials-2",
				});
			}

			// JWT creation here...
			res.json({
				success: true,
				message: "Login successful",
			});
		}
	);
};
exports.getAdminHome = async (req, res, next) => {
	const count = await Product.countDocuments();
	const userCount = await Users.countDocuments();
	const roleCount = await Roles.countDocuments();
	const countCat = await Categories.countDocuments();
	const Products = await Product.find();
	const Userss = await Users.find();
	const genderGroup = await Users.aggregate([
		{
			$group: {
				_id: "$gender",
				count: { $sum: 1 },
			},
		},
	]);
	const data = JSON.stringify(genderGroup);

	res.render("admin/index", {
		pageTitle: "Dashboard",
		currentMenu: "Index",
		count: count,
		userCount: userCount,
		roleCount: roleCount,
		countCat: countCat,
		products: Products,
		users: Userss,
		genderGroup: genderGroup,
		data: data,
	});
};
