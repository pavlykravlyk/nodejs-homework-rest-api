const HTTP_STATUS_CODES = require("../lib/constants");

const validation = (schema) => async (req, res, next) => {
  const { body } = req;

  try {
    await schema.validateAsync(body);
    next();
  } catch (error) {
    const { message } = error;

    return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({
      status: "error",
      code: HTTP_STATUS_CODES.BAD_REQUEST,
      message,
    });
  }
};

module.exports = validation;
