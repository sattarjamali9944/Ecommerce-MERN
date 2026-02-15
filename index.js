const express = require("express"); //express is the framework of node js
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const flash = require("express-flash");
const session = require("express-session");
const app = express();
const db = require("./db");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const multer = require("multer");
const cors = require("cors");
const PORT = process.env.PORT || 4000;

const fetchData = require("./server/middlewares/dataMiddleware");
app.use(fetchData);
const loadCommonData = require('./server/middlewares/loadCommonData');
app.use(loadCommonData);
mongoose
	.connect("mongodb://0.0.0.0:27017/e-commerce")
	.then((result) => {
		console.log("Success");
	})
	.catch((err) => {
		console.log(err);
	});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const oneDay = 1000 * 60 * 60 * 24;
app.use(
	session({
		secret: "test-manage",
		saveUninitialized: true,
		cookie: { maxAge: oneDay }, // Adjust the maxAge to your preference
		resave: false,
	})
);

app.use(flash());
app.use(cors());

const homeRoutes = require("./routes/home");
//const validationRule= require('./server/middlewares/cat-validation');
const adminRoutes = require("./routes/admin");
const roleRoutes = require("./routes/role");
const countryRoutes = require("./routes/country");

app.use(adminRoutes); //admin routes
app.use(homeRoutes); //home routes
app.use(roleRoutes); //role routes
app.use(countryRoutes); //country routes

app.use(express.json());
app.use(cookieParser());
app.set("views", path.join(__dirname, "views"));
//app.use(cors()); // Enable CORS for all routes
// set the view engine to ejs
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "assets")));
/* load 404 page  */
app.use((req, res, next) => {
	res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(PORT, () => {
	console.log(`Server is running at PORT http://localhost:${PORT}`);
});
