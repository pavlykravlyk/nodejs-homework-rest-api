const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .pattern(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required()
    .messages({
      "string.pattern.base":
        "Name may contain only letters, apostrophe, dash and spaces",
    }),

  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/)
    .required()
    .messages({
      "string.email": "Invalid email address",
    }),

  phone: Joi.string()
    .pattern(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
    )
    .required()
    .messages({
      "string.pattern.base":
        "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",
    }),

  favorite: Joi.boolean(),
});

const favoriteSchema = Joi.object({ favorite: Joi.boolean().required() });

module.exports = { contactSchema, favoriteSchema };
