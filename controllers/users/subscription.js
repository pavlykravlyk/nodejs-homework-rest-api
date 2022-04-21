const HTTP_STATUS_CODES = require("../../lib/constants");
const { User } = require("../../models");

const subscription = async (req, res) => {
  const { id } = req.user;
  const { subscription } = req.body;
  const { body } = req;

  const user = await User.findByIdAndUpdate(
    id,
    { subscription },
    { new: true }
  );
  const { email } = user;

  if (!body) {
    return res.json({
      status: "error",
      code: HTTP_STATUS_CODES.BAD_REQUEST,
      message: "missing field subscription",
    });
  }

  if (user) {
    return res.json({
      status: "success",
      code: HTTP_STATUS_CODES.OK,
      data: { user: { id, email, subscription } },
    });
  }

  return res.status(HTTP_STATUS_CODES.NOT_FOUND).json({
    status: "error",
    code: HTTP_STATUS_CODES.NOT_FOUND,
    message: "Not Found",
  });
};

module.exports = subscription;
