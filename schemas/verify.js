const Joi = require("joi");

const verifySchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required().messages({
    "string.email": "Invalid email address",
    "any.required": "missing required field email",
  }),
});

module.exports = verifySchema;
