import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Box } from '@mui/material';
import axios from 'axios';

export default function ClubForm({ open, onClose, onCreated, user }) {
  const [form, setForm] = useState({ name: '', description: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('/api/clubs', { ...form }, { withCredentials: true });
      onCreated(res.data);
      onClose();
      setForm({ name: '', description: '' });
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create club');
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create Club</DialogTitle>
      <DialogContent>
        <TextField label="Name" name="name" fullWidth margin="dense" value={form.name} onChange={handleChange} />
        <TextField label="Description" name="description" fullWidth margin="dense" value={form.description} onChange={handleChange} />
        {error && <Box color="error.main" mt={1}>{error}</Box>}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} disabled={loading}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}
