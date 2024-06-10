const express = require("express");
const router = express.Router();
const hotelController = require('../controllers/hotelController');

router.post("", hotelController.createHotel);
router.post("/:id", hotelController.updateHotel);
module.exports = router;