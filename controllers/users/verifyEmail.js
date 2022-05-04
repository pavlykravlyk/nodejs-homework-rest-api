const HTTP_STATUS_CODES = require("../../lib/constants");
const { User } = require("../../models");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });

  if (!user) {
    res.status(HTTP_STATUS_CODES.NOT_FOUND).json({ message: "User not found" });
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });

  res.status(HTTP_STATUS_CODES.OK).json({ message: "Verification successful" });
};

module.exports = verifyEmail;
