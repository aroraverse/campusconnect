import React, { useEffect, useState } from 'react';
import { fetchClubs } from '../api';
import { Card, CardContent, Typography, Grid, CircularProgress } from '@mui/material';

export default function ClubsList() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClubs().then(data => {
      setClubs(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', my: 4 }} />;

  return (
    <Grid container spacing={3}>
      {clubs.map(club => (
        <Grid item xs={12} md={6} key={club._id}>
          <Card sx={{ background: 'linear-gradient(120deg, #e0e7ff 60%, #f0fdfa 100%)' }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>{club.name}</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>{club.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      {clubs.length === 0 && (
        <Grid item xs={12}><Typography>No clubs found.</Typography></Grid>
      )}
    </Grid>
  );
}
