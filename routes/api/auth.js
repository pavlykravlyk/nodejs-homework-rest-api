const express = require("express");
const router = express.Router();
const { register, login } = require("../../controllers/auth");
const validation = require("../../middelwares/validation");
const { registerSchema, loginSchema } = require("../../schemas");

router.post("/register", validation(registerSchema), register);
router.post("/login", validation(loginSchema), login);

module.exports = router;
