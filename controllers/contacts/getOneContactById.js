const { getContactById } = require("../../models/contact");

const getOneContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);

  if (contact) {
    return res.json({ status: "success", code: 200, data: { contact } });
  }

  return res
    .status(404)
    .json({ status: "error", code: 404, message: "Not Found" });
};

module.exports = getOneContactById;
