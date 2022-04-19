const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../../controllers/auth");

const { auth, validation } = require("../../middelwares");

const { registerSchema, loginSchema } = require("../../schemas");

router.post("/register", validation(registerSchema), register);
router.post("/login", validation(loginSchema), login);
router.get("/logout", auth, logout);

module.exports = router;
