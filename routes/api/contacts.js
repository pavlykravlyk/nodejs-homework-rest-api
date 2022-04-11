const express = require("express");
const router = express.Router();
const validation = require("../../middelwares/validation");
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
router.post("/", validation(contactSchema), addNewContact);
router.delete("/:contactId", deleteOneContactById);
router.put("/:contactId", validation(contactSchema), updateOneContactById);
router.patch(
  "/:contactId/favorite",
  validation(favoriteSchema),
  updateFavorite
);

module.exports = router;
