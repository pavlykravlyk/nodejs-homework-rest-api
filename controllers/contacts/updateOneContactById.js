const { Contact } = require("../../models");

const updateOneContactById = async (req, res) => {
  const { contactId } = req.params;
  const { body } = req;

  const contact = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });

  if (contact) {
    return res.json({ status: "success", code: 200, data: { contact } });
  }

  return res
    .status(404)
    .json({ status: "error", code: 404, message: "Not Found" });
};

module.exports = updateOneContactById;
