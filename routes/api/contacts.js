const express = require("express");
const router = express.Router();
const validateContact = require("../../middelwares/validation.js");
const { contactSchema, favoriteSchema } = require("../../schemas");

const {
  getAllContacts,
  getOneContactById,
  addNewContact,
  deleteOneContactById,
  updateOneContactById,
  updateFavorite,
} = require("../../controllers/contacts");

router.get("/", getAllContacts);
router.get("/:contactId", getOneContactById);
router.post("/", validateContact(contactSchema), addNewContact);
router.delete("/:contactId", deleteOneContactById);
router.put("/:contactId", validateContact(contactSchema), updateOneContactById);
router.patch(
  "/:contactId/favorite",
  validateContact(favoriteSchema),
  updateFavorite
);

module.exports = router;
