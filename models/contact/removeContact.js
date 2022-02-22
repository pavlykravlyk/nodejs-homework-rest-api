const fs = require("fs/promises");
const listContacts = require("./listContacts");
const contactsPath = require("./contactsPath");

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex(({ id }) => id === contactId);

  if (index === -1) {
    return null;
  }

  const filteredContacts = contacts.filter((_, idx) => idx !== index);
  await fs.writeFile(contactsPath, JSON.stringify(filteredContacts, null, 2));

  return contacts[index];
};

module.exports = removeContact;
