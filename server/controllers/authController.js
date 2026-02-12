const db = require("../../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



exports.logins = (req, res) => {
    const { email, password } = req.body;
    console.log("this is login");

    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database error"
            });
        }

        if (result.length === 0) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        const user = result[0];
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // JWT creation here...
        res.json({
            success: true,
            message: "Login successful"
        });
    });
};
