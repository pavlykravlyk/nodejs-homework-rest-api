const { listContacts } = require("../../models/contact");

const getAllContacts = async (req, res, next) => {
  const contacts = await listContacts();
  res.json({ status: "success", code: 200, data: { contacts } });
};

module.exports = getAllContacts;
