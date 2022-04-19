const { User } = require("../models");
const HTTP_STATUS_CODES = require("../lib/constants");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const token = authorization.split(" ")[1];

  if (!token) {
    return res.status(HTTP_STATUS_CODES.UNAUTHORIZED).json({
      message: "Not authorized",
    });
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    if (!user || !user.token) {
      return res.status(HTTP_STATUS_CODES.UNAUTHORIZED).json({
        message: "Not authorized",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(HTTP_STATUS_CODES.UNAUTHORIZED).json({
      message: "Not authorized",
    });

    next(error);
  }
};

module.exports = auth;
