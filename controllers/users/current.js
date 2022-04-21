const HTTP_STATUS_CODES = require("../../lib/constants");
const { User } = require("../../models");

const current = async (req, res) => {
  const { id } = req.user;
  const { email, subscription } = await User.findById(id);

  return res.json({
    status: "success",
    code: HTTP_STATUS_CODES.OK,
    data: { user: { email, subscription } },
  });
};

module.exports = current;
