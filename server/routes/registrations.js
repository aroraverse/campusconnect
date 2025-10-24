const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');
const Event = require('../models/Event');
const role = require('../middleware/role');

// Register for an event
router.post('/:eventId', role(['student', 'teacher', 'admin']), async (req, res) => {
  try {
    const { eventId } = req.params;
    const userId = req.user._id;
    const reg = await Registration.create({ event: eventId, user: userId });

    // Auto-notify event creator about new registration
    const Event = require('../models/Event');
    const Notification = require('../models/Notification');
    const event = await Event.findById(eventId);
    if (event && event.createdBy) {
      await Notification.create({
        user: event.createdBy,
        message: `A user registered for your event: ${event.title}`
      });
    }

    res.status(201).json(reg);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Already registered' });
    }
    res.status(500).json({ error: err.message });
  }
});

// Get registration count for an event
router.get('/count/:eventId', async (req, res) => {
  try {
    const count = await Registration.countDocuments({ event: req.params.eventId });
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all events a user is registered for
router.get('/user/:userId', async (req, res) => {
  try {
    const regs = await Registration.find({ user: req.params.userId }).populate('event');
    res.json(regs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
