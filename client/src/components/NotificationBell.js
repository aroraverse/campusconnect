import React, { useEffect, useState } from 'react';
import { fetchNotifications, markNotificationRead } from '../notificationApi';
import { Badge, IconButton, Menu, MenuItem, ListItemText } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function NotificationBell() {
  const [notes, setNotes] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    fetchNotifications().then(setNotes);
  }, []);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleMarkRead = async (id) => {
    await markNotificationRead(id);
    setNotes(notes => notes.map(n => n._id === id ? { ...n, read: true } : n));
  };

  const unread = notes.filter(n => !n.read).length;

  return (
    <>
      <IconButton color="inherit" onClick={handleOpen}>
        <Badge badgeContent={unread} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {notes.length === 0 && <MenuItem>No notifications</MenuItem>}
        {notes.map(note => (
          <MenuItem key={note._id} selected={!note.read} onClick={() => handleMarkRead(note._id)}>
            <ListItemText primary={note.message} secondary={new Date(note.createdAt).toLocaleString()} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
