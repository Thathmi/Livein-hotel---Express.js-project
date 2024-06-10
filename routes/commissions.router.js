const express = require("express");
const router = express.Router();
const commissionsController = require('../controllers/commissionsController');

router.post("", commissionsController.createCommissions);
router.put("/:id", commissionsController.updateCommissions);

module.exports = router;