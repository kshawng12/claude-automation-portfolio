const express = require('express');
const db      = require('../database');

const router = express.Router();

const VALID_SERVICES = [
  'Remote IT Support',
  'Network Setup & Configuration',
  'Security Audit & Assessment',
  'Computer Repair & Diagnostics',
  'Business IT Consulting',
];

const VALID_TIMES = [
  '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM',
  '3:00 PM', '4:00 PM',
];

router.post('/', (req, res) => {
  const { name, email, phone, service, preferred_date, preferred_time, notes } = req.body;

  if (!name || !email || !service || !preferred_date || !preferred_time) {
    return res.status(400).json({ error: 'Name, email, service, date, and time are required.' });
  }

  if (name.length > 100) {
    return res.status(400).json({ error: 'Name must be 100 characters or fewer.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  if (!VALID_SERVICES.includes(service)) {
    return res.status(400).json({ error: 'Invalid service selected.' });
  }

  if (!VALID_TIMES.includes(preferred_time)) {
    return res.status(400).json({ error: 'Invalid time selected.' });
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(preferred_date)) {
    return res.status(400).json({ error: 'Invalid date format.' });
  }

  if (new Date(preferred_date) < new Date(new Date().toISOString().split('T')[0])) {
    return res.status(400).json({ error: 'Appointment date must be today or in the future.' });
  }

  if (notes && notes.length > 2000) {
    return res.status(400).json({ error: 'Notes must be 2000 characters or fewer.' });
  }

  db.insert('appointments', {
    name:           name.trim(),
    email:          email.trim(),
    phone:          phone ? phone.trim() : null,
    service,
    preferred_date,
    preferred_time,
    notes:          notes ? notes.trim() : null,
  });

  res.status(200).json({ success: true, message: 'Appointment request received. We will confirm shortly.' });
});

router.get('/', (req, res) => {
  const rows = db.all('appointments').reverse();
  res.json(rows);
});

module.exports = router;
