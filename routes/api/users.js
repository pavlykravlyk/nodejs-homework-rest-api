const express = require("express");
const router = express.Router();
const current = require("../../controllers/users");
const auth = require("../../middelwares/auth");

router.get("/current", auth, current);

module.exports = router;
