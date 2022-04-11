const { Contact } = require("../../models");
const HTTP_STATUS_CODES = require("../../lib/constants");

const addNewContact = async (req, res) => {
  const result = await Contact.create(req.body);

  res.status(HTTP_STATUS_CODES.CREATED).json({
    status: "success",
    code: HTTP_STATUS_CODES.CREATED,
    data: { result },
  });
};

module.exports = addNewContact;
