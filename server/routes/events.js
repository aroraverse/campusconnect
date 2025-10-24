const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const role = require('../middleware/role');

// Create event
router.post('/', role(['admin', 'teacher']), async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();

    // Auto-notify all users about the new event
    const User = require('../models/User');
    const Notification = require('../models/Notification');
    const users = await User.find({});
    const notifications = users.map(user => ({
      user: user._id,
      message: `New event posted: ${event.title}`
    }));
    await Notification.insertMany(notifications);

    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all events with filtering
router.get('/', async (req, res) => {
  try {
    const { date, category, department } = req.query;
    let filter = {};
    if (date) filter.date = date;
    if (category) filter.category = category;
    if (department) filter.department = department;
    const events = await Event.find(filter).populate('club createdBy');
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update event
router.put('/:id', role(['admin', 'teacher']), async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete event
router.delete('/:id', role(['admin', 'teacher']), async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
