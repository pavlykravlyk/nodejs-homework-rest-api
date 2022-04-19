const { Contact } = require("../../models");
const HTTP_STATUS_CODES = require("../../lib/constants");

const getOneContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById({
    _id: contactId,
    owner: req._id,
  }).populate({ path: "owner", select: "email" });

  if (result) {
    return res.json({
      status: "success",
      code: HTTP_STATUS_CODES.OK,
      data: { result },
    });
  }

  return res.json({
    status: "error",
    code: HTTP_STATUS_CODES.NOT_FOUND,
    data: { message: `Contact with id=${contactId} not found` },
  });
};

module.exports = getOneContactById;
