const { addContact } = require("../../models/contact");

const addNewContact = async (req, res, next) => {
  const contact = await addContact(req.body);
  res.status(201).json({ status: "success", code: 201, data: { contact } });
};

module.exports = addNewContact;
