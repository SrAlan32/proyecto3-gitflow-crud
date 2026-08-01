const express = require('express');
const contactsRouter = require('./routes/contacts');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/contacts', contactsRouter);

app.get('/', (req, res) => res.json({ message: 'CRUD Contact List API' }));

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
module.exports = app;
