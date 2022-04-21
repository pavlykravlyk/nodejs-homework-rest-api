const { User } = require("../../models");
const HTTP_STATUS_CODES = require("../../lib/constants");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    res
      .status(HTTP_STATUS_CODES.CONFLICT)
      .json({ message: `User ${email} already exists` });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = await User.create({
    email,
    password: hashedPassword,
    subscription,
  });

  res.status(HTTP_STATUS_CODES.CREATED).json({
    status: "success",
    code: HTTP_STATUS_CODES.CREATED,
    data: { user: { email, subscription } },
  });
};

module.exports = register;
