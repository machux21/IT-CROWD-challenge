const { Router } = require("express");
// Importar todos los routers;

const products = require("./products.js");
const brands = require("./brands.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", products);
router.use("/brands", brands);
module.exports = router;