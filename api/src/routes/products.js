const { Router } = require("express");
const router = Router();
const { Brand, Product } = require("../db.js");

//GET PRODUCTS
router.get("/", async (req, res) => {
	try {
		const response = await Product.findAll({ include: Brand });
		res.status(200).json(response);
	} catch (e) {
		res.status(404).json("Not Found");
	}
});
//FILTER PRODUCTS BY ID
router.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const response = await Product.findByPk(id, {
			include: Brand,
		});
		res.status(200).json(response);
	} catch (e) {
		res.status(404).json(e);
	}
});

//CREATE PRODUCTS
router.post("/", async (req, res) => {
	const { name, description, image_url, price, brand } = req.body;
	if (!name || !description || !image_url || !price || !brand) {
		return res.status(400).send("All field must be completed");
	}
	try {
		const newProduct = await Product.create({
			name,
			description,
			image_url,
			price,
		});
		const productBrand = await Brand.findOne({ where: { name: brand } });
		await productBrand.addProduct(newProduct);
		res.status(200).json("Product succesfully created");
	} catch (e) {
		res.status(404).json({ message: e.message });
	}
});

//UPDATE PRODUCTS
router.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { name, description, image_url, price, brand } = req.body;
	if(!id || !name || !description || !image_url || !price || !brand){
		return res.status(404).json("All fields must be completed");
	}
	try {
		await Product.update(
			{
				name,
				description,
				image_url,
				price,
				brand,
			},
			{
				where: {
					id,
				},
			}
		);
		res.status(200).json("Product succesfully updated");
	} catch (e) {
		console.log(e);
		res.status(404).json(e);
	}
});

//DELETE PRODUCT
router.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		await Product.destroy({
			where: {
				id,
			},
		});
		res.status(200).json("Product deleted");
	} catch (e) {
		console.log(e);
		res.status(404).json(e);
	}
});
module.exports = router;
