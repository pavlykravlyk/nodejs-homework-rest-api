const getAllContacts = require("./getAllContacts");
const getOneContactById = require("./getOneContactById");
const addNewContact = require("./addNewContact");
const deleteOneContactById = require("./deleteOneContactById");
const updateOneContactById = require("./updateOneContactById");
const updateFavorite = require("./updateFavorite");

module.exports = {
  getAllContacts,
  getOneContactById,
  addNewContact,
  deleteOneContactById,
  updateOneContactById,
  updateFavorite,
};
