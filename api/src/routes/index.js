const { Router } = require("express");
// Import all routers;
const products = require("./products.js");
const brands = require("./brands.js");
const admin = require("./admin.js");
const router = Router();

// Configure the routers
router.use("/admin", admin);
router.use("/products", products);
router.use("/brands", brands);

router.get("/", (req, res )=>{
	res.send("Welcome to products API");
})
module.exports = router;