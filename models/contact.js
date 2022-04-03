const { Schema, model } = require("mongoose");

const contactSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    favorite: { type: Boolean, required: true },
    code: { type: String, required: true, unique: true, match: /^[0-9]{9}$/ },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("contact", contactSchema);

module.exports = Contact;
