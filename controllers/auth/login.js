const { User } = require("../../models");
const HTTP_STATUS_CODES = require("../../lib/constants");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !user.verify) {
    res
      .status(HTTP_STATUS_CODES.UNAUTHORIZED)
      .json({ message: `User ${email} not found. Please register` });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    res
      .status(HTTP_STATUS_CODES.UNAUTHORIZED)
      .json({ message: "Email or password is wrong" });
  }

  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  await User.findByIdAndUpdate(user._id, { token });
  res
    .status(HTTP_STATUS_CODES.OK)
    .json({ status: "success", code: HTTP_STATUS_CODES.OK, data: { token } });
};

module.exports = login;
