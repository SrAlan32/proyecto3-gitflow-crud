const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, '../data/contacts.json');

function readContacts() {
  const raw = fs.readFileSync(DB_PATH, 'utf-8');
  return JSON.parse(raw || '[]');
}

function writeContacts(contacts) {
  fs.writeFileSync(DB_PATH, JSON.stringify(contacts, null, 2));
}

// CREATE
function createContact(req, res) {
  const { name, phone, email } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'El campo name es obligatorio' });
  }

  const contacts = readContacts();
  const newContact = {
    id: Date.now().toString(),
    name,
    phone: phone || '',
    email: email || ''
  };

  contacts.push(newContact);
  writeContacts(contacts);
  res.status(201).json(newContact);
}

// READ
function getAllContacts(req, res) {
  const contacts = readContacts();
  res.json(contacts);
}

function getContactById(req, res) {
  const contacts = readContacts();
  const contact = contacts.find(c => c.id === req.params.id);
  if (!contact) return res.status(404).json({ error: 'Contacto no encontrado' });
  res.json(contact);
}

// UPDATE
function updateContact(req, res) {
  const contacts = readContacts();
  const index = contacts.findIndex(c => c.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Contacto no encontrado' });

  const { name, phone, email } = req.body;
  contacts[index] = {
    ...contacts[index],
    name: name !== undefined ? name : contacts[index].name,
    phone: phone !== undefined ? phone : contacts[index].phone,
    email: email !== undefined ? email : contacts[index].email
  };

  writeContacts(contacts);
  res.json(contacts[index]);
}

// DELETE
function deleteContact(req, res) {
  const contacts = readContacts();
  const index = contacts.findIndex(c => c.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Contacto no encontrado' });

  const deleted = contacts.splice(index, 1);
  writeContacts(contacts);
  res.json(deleted[0]);
}

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
  readContacts,
  writeContacts
};
