const express = require("express");
const router = express.Router();
const users = require("../models/User");
const Country = require("../models/Country");
const Role = require("../models/Role");
const nodemailer = require("nodemailer");
const bycrpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../../config/jwtToken");
const dotenv = require("dotenv").config();
const multer = require("multer");
const path = require("path");
const session = require("express-session");
const LocalStorage = require("node-localstorage").LocalStorage;
//const cors = require("cors"); //use for apis
localStorage = new LocalStorage("./scratch");
const { check, validationResult, matchedData } = require("express-validator"); //validation pio kare
const addUser = async (req, res) => {
	const successMessage = req.flash("success");
	//const errors='';
	res.render("admin/add-user", {
		pageTitle: "Add User",
		errors: "",
	});
};

const createUser = async (req, res) => {
	try {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			var errMsg = errors.mapped();
			var inputData = matchedData(req);
			let error = JSON.stringify(errors);
			return res.status(203).json({
				error: false,
				message: errMsg,
			});
		} else {
			const { full_name, phone, email, password } = req.body;

			const existingUser = await users.findOne({
				email: email,
			}); // already email code
			if (existingUser) {
				return res.status(400).json({
					message: "Email is already Exists",
				});
			}
			const hashedPassword = await bycrpt.hash(password, 10); //hash password
			let randomNumber = Math.floor(Math.random() * 10000 * 1000);
			const addUser = new users({
				full_name: full_name,
				phone: phone,
				email: email,
				image: "admin_assets/users/test.jpg",
				password: hashedPassword,
				status: "De-active",
				opt: randomNumber,
			});
			addUser
				.save()
				.then((result) => {
					console.log(result);
					req.flash("success", "User is successfully Created");
					const token = jwt.sign(
						{
							email: result.email,
							id: result._id,
						},
						SECRET_KEY
					);
					res.status(201).json({
						user: result,
						token: token,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: "Something went to wrong",
		});
	}
};

const signin = async (req, res) => {
	try {
		const { email, password } = req.body;
		const existingUser = await users.findOne({
			email: email,
		});

		if (!existingUser) {
			return res.status(203).json({
				error: false,
				message: "No User Found",
			});
		}
		const matchPassword = await bycrpt.compare(password, existingUser.password);
		if (!matchPassword) {
			return res.status(203).json({
				error: false,
				message: "Invalid Credential",
			});
		} else {
			const token = jwt.sign(
				{ username: existingUser.email },
				process.env.SECRET_KEY
			);
			req.session.email = existingUser.email;
			req.session.isLoggedIn = true;
			req.session.token = token;
			req.session.userId = existingUser._id;
			return res.status(200).json({
				success: true,
				user_id: existingUser._id,
				full_name: existingUser.full_name,
				email: existingUser.email,
				image: existingUser.image,
				token: generateToken(existingUser._id),
				message: "login successfully",
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: "Something went to wrong",
		});
	}
};
/*logout code*/
const logout = async (req, res) => {
	try {
		req.session.destroy();
		res.redirect("/");
	} catch (error) {
		console.log(error);
	}
};
/*forgot password*/
const forgetPass = async (req, res, next) => {
	res.render("admin/forget-pass", {
		pageTitle: "Forget Password",
	});
};

const forgetPassRequest = async (req, res) => {
	const email = req.body.email;
	const existingUser = await users.findOne({
		email: email,
	});

	if (!existingUser) {
		return res.status(203).json({
			error: false,
			message: "No Account found",
		});
	} else {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			requireTLS: true,
			auth: {
				user: "sattarfiver@gmail.com",
				pass: "fwjgjdktodumzrgc",
			},
		});
		let mailOptions = {
			from: "sattarfiver@gmail.com",
			to: email,
			subject: "Your Opt is",
			text: `Your OPT is ${existingUser.opt}`,
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error.message);
			}
			console.log("success");
		});

		return res.status(203).json({
			success: true,
			email: email,
			message: "Your OPT has been sent on your email",
		});
	}
};
const opt = async (req, res) => {
	try {
		res.render("admin/opt", {
			pageTitle: "OPT",
		});
	} catch (error) {
		console.log(error);
	}
};
const optCreate = async (req, res) => {
	const opt = req.body.optt;
	const existingUser = await users.findOne({
		opt: opt,
	});
};
const getUsers = async (req, res, next) => {
	const usrs = await users.find();
	const roles = await Role.find();
	res.render("admin/users", {
		pageTitle: "Get Users",
		user: usrs,
		roles: roles,
	});
};
const userProfile = async (req, res) => {
	try {
		const user = req.user;
		const loginUserProfile = await users.findOne({
			email: req.session.email,
		});
		const countries = await Country.find();
		res.render("admin/user-profile", {
			pageTitle: "User Profile",
			countries: countries,
			profile: loginUserProfile,
		});
	} catch (error) {
		console.log(error);
	}
};
const postUpdateProfile = async (req, res) => {
	try {
		const updateProfile = await users.updateOne(
			{ email: req.session.email },
			{
				$set: {
					full_name: req.body.full_name,
					phone: req.body.phone,
					mobile: req.body.mobile,
					address: req.body.address,
					countryId: req.body.countryId,
					gender: req.body.gender,
					website: req.body.website,
					github: req.body.github,
					facebook: req.body.facebook,
					twitter: req.body.twitter,
					instagram: req.body.instagram,
				},
			}
		);
		return res.status(200).json({
			success: true,
			message: "user profile is updated successfully",
		});
	} catch (error) {
		console.log(error);
	}
};

const allUserJson = async (req, res) => {
	try {
		const usersList = await users
			.find()
			.select(
				"full_name phone email image facebook gender github instagram mobile twitter website"
			);

		if (!usersList || usersList.length === 0) {
			return res.status(404).json({
				success: false,
				message: "No users found",
			});
		}

		res.status(200).json({
			success: true,
			data: usersList,
		});
	} catch (error) {
		console.error("Error fetching users:", error);
		res.status(500).json({
			success: false,
			message: "Server error",
		});
	}
};
const uploadUserImageFunction = async (req, res) => {
	if (!req.file) {
		return res
			.status(400)
			.json({ success: false, message: "No file uploaded" });
	}

	try {
		const imageUrl = `/admin_assets/users/${req.file.filename}`;

		// Assume you have a way to get the current user's ID
		const userId = req.session.userId; // or from req.body or req.params
		// Update user document with new image URL
		const updateProfileImage = await users.updateOne(
			{ _id: userId },
			{
				$set: {
					image: imageUrl,
				},
			}
		);
		if (!userId) {
			return res
				.status(404)
				.json({ success: false, message: "User not found" });
		}

		res.json({ success: true, message: "Image updated successfully" });
	} catch (error) {
		console.error("Error updating image:", error);
		res.status(500).json({ success: false, message: "Failed to update image" });
	}
};

const changeUserStatus = async (req, res) => {
	try {
		const updatedUser = await users.findByIdAndUpdate(
			req.params.id,
			{ status: req.body.status },
			{ new: true }
		);
		if (!updatedUser) {
			return res.status(404).send("User not found");
		}
		res.json({
            success: true,
            message: "User updated successfully",
            data: updatedUser
        });
	} catch (error) {
		console.error(error);
		res.status(500).send("Server error");
	}
};
const changeUserRole = async (req, res) => {
	try {
		const updatedUser = await users.findByIdAndUpdate(
			req.params.id,
			{ status: req.body.role },
			{ new: true }
		);
		if (!updatedUser) {
			return res.status(404).send("User not found");
		}
		res.json(updatedUser);
	} catch (error) {
		console.error(error);
		res.status(500).send("Server error");
	}
};
const getUserInfo = async (req, res) => {
	try {
		const userInfo = await users.findById(req.params.id);
		if (!userInfo) {
			return res.status(404).json({ message: "User not found" });
		}
		res.json(userInfo);
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};
module.exports = {
	addUser,
	postUpdateProfile,
	createUser,
	signin,
	logout,
	forgetPass,
	forgetPassRequest,
	opt,
	optCreate,
	getUsers,
	userProfile,
	uploadUserImageFunction,
	allUserJson,
	changeUserStatus,
	getUserInfo,
};
