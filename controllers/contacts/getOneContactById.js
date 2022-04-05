const { Contact } = require("../../models");

const getOneContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  console.log(result);

  result
    ? res.json({ status: "success", code: 200, data: { result } })
    : res.json({
        status: "error",
        code: 404,
        message: `Contact with id=${contactId} not found`,
      });
};

module.exports = getOneContactById;
