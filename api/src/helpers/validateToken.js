const { Admin } = require("../db.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { SECRET } = process.env;

//VALIDATE TOKEN
function validateToken(req, res, next) {
	const accessToken = req.headers["authorization"] || req.query.accesstoken;
	console.log(accessToken)
	if (!accessToken) return res.send("Access denied");
	//VERIFY THE TOKEN
	jwt.verify(accessToken, SECRET, async (err, admin) => {
		if (err) {
			res.status(401).json("Access denied, token expired or incorrect");
		} else {
			const adminVerified = await Admin.findOne({
				where: { username: admin.username },
			});
			if (adminVerified) {
				next();
			} else {
				res.status(404).json("Admin incorrect");
			}
		}
	});
}
module.exports = validateToken;