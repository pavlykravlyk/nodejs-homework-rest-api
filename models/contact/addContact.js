const fs = require("fs/promises");
const listContacts = require("./listContacts.js");
const { randomUUID } = require("crypto");
const contactsPath = require("./contactsPath.js");

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
  const newContact = { id: randomUUID(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

module.exports = addContact;
