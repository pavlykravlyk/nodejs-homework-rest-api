const { Contact } = require("../../models");

const deleteOneContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndDelete(contactId);

  if (contact) {
    return res.json({
      status: "success",
      code: 200,
      message: "Contact deleted",
      data: { contact },
    });
  }

  return res
    .status(404)
    .json({ status: "error", code: 404, message: "Not Found" });
};

module.exports = deleteOneContactById;
