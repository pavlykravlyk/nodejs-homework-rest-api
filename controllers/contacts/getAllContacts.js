const { Contact } = require("../../models");
const HTTP_STATUS_CODES = require("../../lib/constants");

const getAllContacts = async (req, res) => {
  const result = await Contact.find({});

  res.json({ status: "success", code: HTTP_STATUS_CODES.OK, data: { result } });
};

module.exports = getAllContacts;
