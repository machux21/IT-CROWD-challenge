const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Admin } = require("../db.js");
require("dotenv").config();
const { SECRET } = process.env;


//CREATE ADMIN ===> REGISTER
router.post("/register", async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		return res.status(404).json("All fields must be completed");
	}
	const salt = await bcrypt.genSalt(10);
	try {
		await Admin.create({
			username,
			password: await bcrypt.hash(password, salt),
		});
		res.status(200).json("User registered")
	} catch (e) {
		
		res.status(400).json(e)
	}
});

//LOGIN ADMIN
router.post("/login", async (req, res) => {
	const { username, password } = req.body;
	try {
		const admin = await Admin.findOne({
			where: { username },
		});
		if (admin) {
			const passwordValid = await bcrypt.compare(
				password,
				admin.password
			);
			if (passwordValid) {
				const token = jwt.sign(
					{ username: admin.username },
					SECRET,
					{ expiresIn: "3h" }
				);
				return res.status(200).json({ token });
			} else {
				res.status(404).json("Password incorrect");
			}
		} else {
			res.status(404).json("Admin incorrect");
		}
	} catch (e) {
		console.log(e);
		res.status(400).json(e)
	}
});

module.exports = router;
