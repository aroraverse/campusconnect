const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const role = require('../middleware/role');

// Create comment (student, teacher, admin)
router.post('/', role(['student', 'teacher', 'admin']), async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all comments for an event
router.get('/event/:eventId', async (req, res) => {
  try {
    const comments = await Comment.find({ event: req.params.eventId }).populate('user');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete comment (admin only)
router.delete('/:id', role('admin'), async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    res.json({ message: 'Comment deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
