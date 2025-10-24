import React, { useEffect, useState } from 'react';
import { getEventRegistrationCount, registerForEvent } from '../registrationApi';
import { Button, Typography, Box } from '@mui/material';

export default function EventRegistration({ eventId, user }) {
  const [count, setCount] = useState(0);
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getEventRegistrationCount(eventId).then(setCount);
  }, [eventId]);

  const handleRegister = async () => {
    setError('');
    try {
      await registerForEvent(eventId);
      setRegistered(true);
      setCount(c => c + 1);
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <Box sx={{ mt: 1 }}>
      <Typography variant="body2" color="text.secondary">Registered: {count}</Typography>
      {user && user.role === 'student' && !registered && (
        <Button size="small" variant="outlined" sx={{ mt: 1 }} onClick={handleRegister}>Register</Button>
      )}
      {registered && <Typography color="success.main" sx={{ mt: 1 }}>You are registered!</Typography>}
      {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}
    </Box>
  );
}
