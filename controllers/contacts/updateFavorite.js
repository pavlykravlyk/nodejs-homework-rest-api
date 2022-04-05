const { Contact } = require("../../models");

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const { body } = req;

  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    { new: true }
  );

  if (!body) {
    return res.json({
      status: "error",
      code: 400,
      message: "missing field favorite",
    });
  }

  if (result) {
    return res.json({ status: "success", code: 200, data: { result } });
  }

  return res
    .status(404)
    .json({ status: "error", code: 404, message: "Not Found" });
};

module.exports = updateFavorite;
