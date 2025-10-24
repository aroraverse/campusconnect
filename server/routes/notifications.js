const express = require('express');
const router = express.Router();
const Notification = require('../models/Notification');
const role = require('../middleware/role');

// Get notifications for current user
router.get('/', role(['student', 'teacher', 'admin']), async (req, res) => {
  try {
    const notes = await Notification.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Mark notification as read
router.post('/read/:id', role(['student', 'teacher', 'admin']), async (req, res) => {
  try {
    await Notification.findByIdAndUpdate(req.params.id, { read: true });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
