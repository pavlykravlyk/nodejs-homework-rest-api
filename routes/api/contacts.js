const express = require("express");
const router = express.Router();
const { auth, validation } = require("../../middelwares");
const { contactSchema, favoriteSchema } = require("../../schemas");

const {
  getAllContacts,
  getOneContactById,
  addNewContact,
  deleteOneContactById,
  updateOneContactById,
  updateFavorite,
} = require("../../controllers/contacts");

router.get("/", auth, getAllContacts);
router.post("/", auth, validation(contactSchema), addNewContact);
router.get("/:contactId", auth, getOneContactById);
router.post("/", auth, validation(contactSchema), addNewContact);
router.delete("/:contactId", auth, deleteOneContactById);
router.put(
  "/:contactId",
  auth,
  validation(contactSchema),
  updateOneContactById
);
router.patch(
  "/:contactId/favorite",
  auth,
  validation(favoriteSchema),
  updateFavorite
);

module.exports = router;
