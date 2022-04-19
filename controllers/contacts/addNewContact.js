const { Contact } = require("../../models");
const HTTP_STATUS_CODES = require("../../lib/constants");

const addNewContact = async (req, res) => {
  const { _id } = req.user;
  const result = await Contact.create({ ...req.body, owner: _id });

  res.status(HTTP_STATUS_CODES.CREATED).json({
    status: "success",
    code: HTTP_STATUS_CODES.CREATED,
    data: { result },
  });
};

module.exports = addNewContact;
