const { Contact } = require("../../models");
const HTTP_STATUS_CODES = require("../../lib/constants");

const updateOneContactById = async (req, res) => {
  const { contactId } = req.params;
  const { body } = req;

  const contact = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });

  if (contact) {
    return res.json({
      status: "success",
      code: HTTP_STATUS_CODES.OK,
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

module.exports = updateOneContactById;
