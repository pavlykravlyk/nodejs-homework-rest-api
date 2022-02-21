const fs = require("fs/promises");
const listContacts = require("./listContacts");
const contactsPath = require("./contactsPath");

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex(({ id }) => id === contactId);

  if (idx === -1) {
    return null;
  }

  contacts[idx] = { ...contacts[idx], ...body };

  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  return contacts[idx];
};

module.exports = updateContact;
