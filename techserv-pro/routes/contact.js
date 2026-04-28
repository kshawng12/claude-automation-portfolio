const express = require('express');
const db      = require('../database');

const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  if (name.length > 100) {
    return res.status(400).json({ error: 'Name must be 100 characters or fewer.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  if (message.length > 5000) {
    return res.status(400).json({ error: 'Message must be 5000 characters or fewer.' });
  }

  db.insert('contacts', {
    name:    name.trim(),
    email:   email.trim(),
    message: message.trim(),
  });

  res.status(200).json({ success: true, message: 'Message received. We will be in touch soon.' });
});

module.exports = router;
