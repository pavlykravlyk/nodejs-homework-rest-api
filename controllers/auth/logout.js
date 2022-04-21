const { User } = require("../../models");
const HTTP_STATUS_CODES = require("../../lib/constants");

const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: null });
  res.status(HTTP_STATUS_CODES.NO_CONTENT).json();
};

module.exports = logout;
