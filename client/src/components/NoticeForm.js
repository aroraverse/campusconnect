import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Box } from '@mui/material';
import axios from 'axios';

export default function NoticeForm({ open, onClose, onCreated, user }) {
  const [form, setForm] = useState({ title: '', description: '', date: '', category: 'notice', department: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('/api/events', { ...form, createdBy: user._id }, { withCredentials: true });
      onCreated(res.data);
      onClose();
      setForm({ title: '', description: '', date: '', category: 'notice', department: '' });
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create notice');
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create Notice</DialogTitle>
      <DialogContent>
        <TextField label="Title" name="title" fullWidth margin="dense" value={form.title} onChange={handleChange} />
        <TextField label="Description" name="description" fullWidth margin="dense" value={form.description} onChange={handleChange} />
        <TextField label="Date" name="date" type="date" fullWidth margin="dense" value={form.date} onChange={handleChange} InputLabelProps={{ shrink: true }} />
        <TextField label="Department" name="department" fullWidth margin="dense" value={form.department} onChange={handleChange} />
        {error && <Box color="error.main" mt={1}>{error}</Box>}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} disabled={loading}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}
