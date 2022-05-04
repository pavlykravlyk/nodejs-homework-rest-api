const { User } = require("../../models");
const HTTP_STATUS_CODES = require("../../lib/constants");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { randomUUID } = require("crypto");
const sendEmail = require("../../helpers");

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    res
      .status(HTTP_STATUS_CODES.CONFLICT)
      .json({ message: `User ${email} already exists` });
  }

  const avatarURL = gravatar.url(email);
  const hashedPassword = bcrypt.hashSync(password, 10);
  const verificationToken = randomUUID();
  await User.create({
    email,
    password: hashedPassword,
    subscription,
    avatarURL,
    verificationToken,
  });

  const msg = {
    to: email,
    subject: "Email verification",
    text: "Verify your email",
    html: `<a target="_blank" href="http://localhost:${process.env.PORT}/api/users/verify/${verificationToken}">Click to verify</a>`,
  };

  await sendEmail(msg);

  res.status(HTTP_STATUS_CODES.CREATED).json({
    status: "success",
    code: HTTP_STATUS_CODES.CREATED,
    data: { user: { email, subscription, avatarURL, verificationToken } },
  });
};

module.exports = register;
