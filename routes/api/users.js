const express = require("express");
const router = express.Router();
const { auth, validation, upload } = require("../../middelwares");
const { subsSchema, verifySchema } = require("../../schemas");
const {
  current,
  subscription,
  updateAvatar,
  verifyEmail,
  reVerifyEmail,
} = require("../../controllers/users");

router.get("/current", auth, current);

router.patch("/subscription", validation(subsSchema), auth, subscription);
router.patch("/avatars", auth, upload.single("avatar"), updateAvatar);

router.get("/verify/:verificationToken", verifyEmail);
router.post("/verify", validation(verifySchema), reVerifyEmail);

module.exports = router;
