const { User } = require("../../models");
const HTTP_STATUS_CODES = require("../../lib/constants");

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  console.log(req.body);
  const user = await User.findOne({ email });

  if (user) {
    res
      .status(HTTP_STATUS_CODES.CONFLICT)
      .json({ message: `User ${email} already exists` });
  }

  const result = await User.create({ email, password });

  res.status(HTTP_STATUS_CODES.CREATED).json({
    status: "success",
    code: HTTP_STATUS_CODES.CREATED,
    data: { user: { email, subscription } },
  });

  //   const token = jwt.sign(user, process.env.JWT_SECRET);
  //   res.json({ token });
};

module.exports = register;
