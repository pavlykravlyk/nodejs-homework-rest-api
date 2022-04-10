const { Contact } = require("../../models");
const HTTP_STATUS_CODES = require("../../lib/constants");

const deleteOneContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndDelete(contactId);

  if (contact) {
    return res.json({
      status: "success",
      code: HTTP_STATUS_CODES.OK,
      message: "Contact deleted",
      data: { contact },
    });
  }

  return res
    .status(HTTP_STATUS_CODES.NOT_FOUND)
    .json({
      status: "error",
      code: HTTP_STATUS_CODES.NOT_FOUND,
      message: "Not Found",
    });
};

module.exports = deleteOneContactById;
