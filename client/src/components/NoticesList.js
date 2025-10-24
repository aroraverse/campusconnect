import React, { useEffect, useState } from 'react';
import { fetchNotices } from '../api';
import { Card, CardContent, Typography, Grid, CircularProgress } from '@mui/material';

export default function NoticesList() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotices().then(data => {
      setNotices(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', my: 4 }} />;

  return (
    <Grid container spacing={3}>
      {notices.map(notice => (
        <Grid item xs={12} key={notice._id}>
          <Card sx={{ background: 'linear-gradient(120deg, #f0fdfa 60%, #e0e7ff 100%)' }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>{notice.title}</Typography>
              <Typography variant="body2" color="text.secondary">{new Date(notice.date).toLocaleDateString()}</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>{notice.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      {notices.length === 0 && (
        <Grid item xs={12}><Typography>No notices found.</Typography></Grid>
      )}
    </Grid>
  );
}
