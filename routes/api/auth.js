const express = require("express");
const router = express.Router();
const { register } = require("../../controllers/auth");

const validation = require("../../middelwares/validation");
// const { contactSchema, favoriteSchema } = require("../../schemas");
const { registerSchema, loginSchema } = require("../../schemas");

router.post("/register", validation(registerSchema), register);

module.exports = router;
