const Productsm = require("../models/commonModels");
const db = require("../../db");


/* get home  */
exports.getHome = async (req, res) => {
	try {
		const [products, productse, productsk, bestSeller] = await Promise.all([
			Productsm.getAllProducts(),
			Productsm.getAllProductsElectronic(),
			Productsm.getAllProductsKids(),
			Productsm.getBestSeller()
		]);
	
		res.render("user/dashboard", {
			pageTitle: "Home",
			currentMenu: "home",
			products,
			productse,
			productsk,
			bestSeller
		});
	} catch (error) {
		console.error("Error fetching products:", error);
		res.status(500).render("error", { message: "Failed to load products." });
	}
	
	
};
exports.searchs = (req, res) => {
	const { q } = req.query; // q = search term
	console.log(req.query);
  
	if (!q) {
	  return res.json({ results: [] });
	}
  
	try {
	  const sql = `SELECT * FROM products WHERE title LIKE ? OR slug LIKE ? LIMIT 10`;
	  const searchTerm = `%${q.trim()}%`;
	  db.query(sql, [searchTerm, searchTerm], (err, results) => {
		if (err) {
		  console.error(err);
		  return res.status(500).json({ error: "Database error" });
		}
		res.json({ results });
	  });
  
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ error: "Server errorjkfjdk" });
	}
  };
exports.getAbout = (req, res) => {
	res.render("user/about", {
		pageTitle: "About Us",
		currentMenu: "about",
	});
};

/* get all shops */
exports.getAllShops = (req, res, next) => {
	res.render("user/shops", {
		pageTitle: "Shops",
		currentMenu: "shop",
	});
};

/* get coming-soon */
exports.getComingSoon = (req, res, next) => {
	res.render("user/coming-soon", {
		pageTitle: "Coming-Soon",
		currentMenu: "coming-soon",
	});
};
/* get Contact */
exports.getContact = (req, res, next) => {
	res.render("user/contact", {
		pageTitle: "Contact",
		currentMenu: "contact",
	});
};
