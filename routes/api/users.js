const express = require("express");
const router = express.Router();
const { current, subscription } = require("../../controllers/users");
const { auth, validation } = require("../../middelwares");
const { subsSchema } = require("../../schemas");

router.get("/current", auth, current);
router.patch("/subscription", validation(subsSchema), auth, subscription);

module.exports = router;
