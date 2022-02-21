const express = require("express");
const router = express.Router();
const validateContact = require("../../middelwares/validation.js");
const contactSchema = require("./contact-validate-schema");

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../models/contact");

router.get("/", async (req, res, next) => {
  const contacts = await listContacts();
  res.json({ status: "success", code: 200, data: { contacts } });
});

router.get("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);

  if (contact) {
    return res.json({ status: "success", code: 200, data: { contact } });
  }

  return res
    .status(404)
    .json({ status: "error", code: 404, message: "Not Found" });
});

router.post("/", validateContact(contactSchema), async (req, res, next) => {
  const contact = await addContact(req.body);
  res.status(201).json({ status: "success", code: 201, data: { contact } });
});

router.delete("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await removeContact(contactId);

  if (contact) {
    return res.json({ status: "success", code: 200, data: { contact } });
  }

  return res
    .status(404)
    .json({ status: "error", code: 404, message: "Not Found" });
});

router.put(
  "/:contactId",
  validateContact(contactSchema),
  async (req, res, next) => {
    const { contactId } = req.params;
    const { body } = req;

    const contact = await updateContact(contactId, body);

    if (contact) {
      return res.json({ status: "success", code: 200, data: { contact } });
    }

    return res
      .status(404)
      .json({ status: "error", code: 404, message: "Not Found" });
  }
);

module.exports = router;
