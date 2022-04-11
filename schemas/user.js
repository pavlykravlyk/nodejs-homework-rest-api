const Joi = require("joi");

const userSchema = Joi.object({
  password: Joi.string()
    .required()
    .messages({ "string.empty": "Set password for user" }),

  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/)
    .required()
    .messages({
      "string.email": "Invalid email address",
    }),
  subscription: Joi.string()
    .required()
    .valid("starter", "pro", "business")
    .default("starter"),
});

module.exports = userSchema;
