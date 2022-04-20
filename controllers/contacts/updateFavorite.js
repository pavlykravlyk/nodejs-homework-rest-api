const { Contact } = require("../../models");
const HTTP_STATUS_CODES = require("../../lib/constants");

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const { body } = req;

  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    { new: true }
  );
  console.log(result);

  if (!body) {
    return res.json({
      status: "error",
      code: HTTP_STATUS_CODES.BAD_REQUEST,
      message: "missing field favorite",
    });
  }

  if (result) {
    return res.json({
      status: "success",
      code: HTTP_STATUS_CODES.OK,
      data: { result },
    });
  }

  return res.status(HTTP_STATUS_CODES.NOT_FOUND).json({
    status: "error",
    code: HTTP_STATUS_CODES.NOT_FOUND,
    message: "Not Found",
  });
};

module.exports = updateFavorite;
