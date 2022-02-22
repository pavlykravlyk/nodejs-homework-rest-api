const { removeContact } = require("../../models/contact");

const deleteOneContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await removeContact(contactId);

  if (contact) {
    return res.json({ status: "success", code: 200, data: { contact } });
  }

  return res
    .status(404)
    .json({ status: "error", code: 404, message: "Not Found" });
};

module.exports = deleteOneContactById;
