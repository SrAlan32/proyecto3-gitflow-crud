const fs = require('fs');
const path = require('path');
const DB_PATH = path.join(__dirname, '../data/contacts.json');

function readContacts() {
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8') || '[]');
}
function writeContacts(contacts) {
  fs.writeFileSync(DB_PATH, JSON.stringify(contacts, null, 2));
}

function createContact(req, res) {
  const { name, phone, email } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'El campo name es obligatorio' });
  }
  const contacts = readContacts();
  const newContact = { id: Date.now().toString(), name, phone: phone || '', email: email || '' };
  contacts.push(newContact);
  writeContacts(contacts);
  res.status(201).json(newContact);
}

module.exports = { createContact, readContacts, writeContacts };
