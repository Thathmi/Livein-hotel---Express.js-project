const express = require("express");
const router = express.Router();
const statusController = require('../controllers/statusController');

router.post("", statusController.createStatus);
router.put("/:id", statusController.createStatus);

module.exports = router;