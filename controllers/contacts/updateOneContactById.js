const { updateContact } = require("../../models/contact");

const updateOneContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const { body } = req;

  const contact = await updateContact(contactId, body);

  if (contact) {
    return res.json({ status: "success", code: 200, data: { contact } });
  }

  return res
    .status(404)
    .json({ status: "error", code: 404, message: "Not Found" });
};

module.exports = updateOneContactById;
