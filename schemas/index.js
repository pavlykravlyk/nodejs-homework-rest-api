const { contactSchema, favoriteSchema } = require("./contact");
const { registerSchema, loginSchema, subsSchema } = require("./user");
const verifySchema = require("./verify");

module.exports = {
  contactSchema,
  favoriteSchema,
  registerSchema,
  loginSchema,
  subsSchema,
  verifySchema,
};
