const express = require("express");
const router = express.Router();
const {
  current,
  subscription,
  updateAvatar,
} = require("../../controllers/users");
const { auth, validation, upload } = require("../../middelwares");
const { subsSchema } = require("../../schemas");

router.get("/current", auth, current);
router.patch("/subscription", validation(subsSchema), auth, subscription);
router.patch("/avatars", auth, upload.single("avatar"), updateAvatar);

module.exports = router;
