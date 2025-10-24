import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Typography, Box, Tabs, Tab } from '@mui/material';
import { login, register } from '../authApi';

export default function AuthDialog({ open, onClose, onAuth }) {
  const [tab, setTab] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await login(form.email, form.password);
      onAuth(res.user);
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
    setLoading(false);
  };

  const handleRegister = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await register(form);
      onAuth(res.user);
      onClose();
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>CampusConnect Login / Register</DialogTitle>
      <DialogContent>
        <Tabs value={tab} onChange={(_, v) => setTab(v)} centered sx={{ mb: 2 }}>
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>
        {tab === 1 && (
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            name="name"
            fullWidth
            variant="standard"
            value={form.name}
            onChange={handleChange}
          />
        )}
        <TextField
          margin="dense"
          label="Email"
          name="email"
          type="email"
          fullWidth
          variant="standard"
          value={form.email}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Password"
          name="password"
          type="password"
          fullWidth
          variant="standard"
          value={form.password}
          onChange={handleChange}
        />
        {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        {tab === 0 ? (
          <Button onClick={handleLogin} disabled={loading}>Login</Button>
        ) : (
          <Button onClick={handleRegister} disabled={loading}>Register</Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
