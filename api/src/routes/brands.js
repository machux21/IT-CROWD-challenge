const { Router } = require("express");
const router = Router();
const { Brand, Product } = require("../db.js");

//GET BRANDS
router.get("/", async (req, res) => {
	try {
		const response = await Brand.findAll({
			order: [["name", "asc"]],
		});
		res.status(200).json(response);
	} catch (e) {
		console.log(e);
		res.status(404).json(e);
	}
});

//CREATE BRAND
router.post("/", async (req, res) => {
	const { name, logo_url } = req.body;
	if (!name || !logo_url) {
		return res.status(404).json("All fields must be completed");
	}
	try {
		await Brand.create({
			name,
			logo_url,
		});
		res.status(200).json("Brand succesfully created");
	} catch (e) {
		console.log(e);
		res.status(404).json(e);
	}
});
//UPDATE BRAND
router.put("/", async (req, res) => {
	const { id, name, logo_url } = req.body;
	if (!id || !name || !logo_url) {
		return res.status(404).json("All fields must be completed");
	}
	try {
		await Brand.update(
			{
				name,
				logo_url,
			},
			{
				where: {
					id,
				},
			}
		);
		res.status(200).json("Brand succesfully updated");
	} catch (e) {
		console.log(e);
		res.status(404).json(e);
	}
});

module.exports = router;
