const express = require("express");
const router = express.Router();
const { register } = require("../../controllers/auth");

const validation = require("../../middelwares/validation");
// const { contactSchema, favoriteSchema } = require("../../schemas");
const { userSchema } = require("../../schemas");

router.post("/register", validation(userSchema), register);

module.exports = router;
