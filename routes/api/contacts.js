const express = require("express");
const router = express.Router();
const validateContact = require("../../middelwares/validation.js");
const contactSchema = require("../../schemas/contact-validate");

const {
  getAllContacts,
  getOneContactById,
  addNewContact,
  deleteOneContactById,
  updateOneContactById,
} = require("../../controllers/contacts");

router.get("/", getAllContacts);
router.get("/:contactId", getOneContactById);
router.post("/", validateContact(contactSchema), addNewContact);
router.delete("/:contactId", deleteOneContactById);
router.put("/:contactId", validateContact(contactSchema), updateOneContactById);

module.exports = router;
