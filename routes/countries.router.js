const express = require("express");
const router = express.Router();
const countriesController = require('../controllers/countriesController');

router.post("", countriesController.createCountries);
router.put("/:id", countriesController.updateCountries);
router.delete("/:id", countriesController.deleteCountries);

module.exports = router;