
import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../api';
import { Card, CardContent, Typography, Grid, CircularProgress, Divider } from '@mui/material';
import EventRegistration from './EventRegistration';
import EventComments from './EventComments';

export default function EventsList({ user }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents().then(data => {
      setEvents(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', my: 4 }} />;

  return (
    <Grid container spacing={3}>
      {events.map(event => (
        <Grid item xs={12} md={6} key={event._id}>
          <Card sx={{ background: 'linear-gradient(120deg, #f0fdfa 60%, #e0e7ff 100%)' }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>{event.title}</Typography>
              <Typography variant="body2" color="text.secondary">{new Date(event.date).toLocaleDateString()}</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>{event.description}</Typography>
              {event.category && <Typography variant="caption" color="primary">{event.category}</Typography>}
              <EventRegistration eventId={event._id} user={user} />
              <Divider sx={{ my: 2 }} />
              <EventComments eventId={event._id} user={user} />
            </CardContent>
          </Card>
        </Grid>
      ))}
      {events.length === 0 && (
        <Grid item xs={12}><Typography>No events found.</Typography></Grid>
      )}
    </Grid>
  );
}
