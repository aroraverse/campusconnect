import NotificationBell from './components/NotificationBell';


import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Button, Tabs, Tab, Avatar, Menu, MenuItem } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import EventsList from './components/EventsList';
import NoticesList from './components/NoticesList';
import ClubsList from './components/ClubsList';
import AuthDialog from './components/AuthDialog';
import EventForm from './components/EventForm';
import NoticeForm from './components/NoticeForm';
import ClubForm from './components/ClubForm';
import { getCurrentUser, logout } from './authApi';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

function App() {
  const [tab, setTab] = useState(0);
  const [authOpen, setAuthOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [eventFormOpen, setEventFormOpen] = useState(false);
  const [eventsKey, setEventsKey] = useState(0);
  const [noticeFormOpen, setNoticeFormOpen] = useState(false);
  const [noticesKey, setNoticesKey] = useState(0);
  const [clubFormOpen, setClubFormOpen] = useState(false);
  const [clubsKey, setClubsKey] = useState(0);

  useEffect(() => {
    getCurrentUser().then(setUser).catch(() => setUser(null));
  }, []);

  const handleLogout = async () => {
    await logout();
    setUser(null);
    setAnchorEl(null);
  };

  const handleEventCreated = () => {
    setEventsKey(k => k + 1);
  };
  const handleNoticeCreated = () => {
    setNoticesKey(k => k + 1);
  };
  const handleClubCreated = () => {
    setClubsKey(k => k + 1);
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)' }}>
      <AppBar position="static" sx={{ background: 'linear-gradient(90deg, #6366f1 0%, #06b6d4 100%)' }}>
        <Toolbar>
          <EventIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
            CampusConnect
          </Typography>
          {user ? (
            <>
              <NotificationBell />
              <Button color="inherit" onClick={e => setAnchorEl(e.currentTarget)} startIcon={<Avatar sx={{ width: 24, height: 24 }}>{user.name[0]}</Avatar>}>
                {user.name} <Box component="span" sx={{ ml: 1, fontSize: 12, fontWeight: 500, color: '#e0e7ff', bgcolor: '#6366f1', px: 1, borderRadius: 1, textTransform: 'capitalize' }}>{user.role}</Box>
              </Button>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                <MenuItem disabled>{user.email}</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Button color="inherit" onClick={() => setAuthOpen(true)}>Login</Button>
          )}
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 6, position: 'relative' }}>
        <Tabs value={tab} onChange={(_, v) => setTab(v)} centered>
          <Tab icon={<EventIcon />} label="Events" />
          <Tab icon={<AnnouncementIcon />} label="Notices" />
          <Tab icon={<GroupIcon />} label="Clubs" />
        </Tabs>
        <Box sx={{ mt: 4 }}>
          {tab === 0 && <>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>Upcoming Events</Typography>
            {(user && (user.role === 'admin' || user.role === 'teacher')) && (
              <Fab color="primary" aria-label="add" sx={{ position: 'absolute', top: 0, right: 0 }} onClick={() => setEventFormOpen(true)}>
                <AddIcon />
              </Fab>
            )}
            <EventsList key={eventsKey} user={user} />
            <EventForm open={eventFormOpen} onClose={() => setEventFormOpen(false)} onCreated={handleEventCreated} user={user} />
          </>}
          {tab === 1 && <>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>Latest Notices</Typography>
            {(user && (user.role === 'admin' || user.role === 'teacher')) && (
              <Fab color="secondary" aria-label="add" sx={{ position: 'absolute', top: 0, right: 0 }} onClick={() => setNoticeFormOpen(true)}>
                <AddIcon />
              </Fab>
            )}
            <NoticesList key={noticesKey} />
            <NoticeForm open={noticeFormOpen} onClose={() => setNoticeFormOpen(false)} onCreated={handleNoticeCreated} user={user} />
          </>}
          {tab === 2 && <>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>Campus Clubs</Typography>
            {(user && (user.role === 'admin' || user.role === 'teacher')) && (
              <Fab color="success" aria-label="add" sx={{ position: 'absolute', top: 0, right: 0 }} onClick={() => setClubFormOpen(true)}>
                <AddIcon />
              </Fab>
            )}
            <ClubsList key={clubsKey} />
            <ClubForm open={clubFormOpen} onClose={() => setClubFormOpen(false)} onCreated={handleClubCreated} user={user} />
          </>}
        </Box>
      </Container>
      <AuthDialog open={authOpen} onClose={() => setAuthOpen(false)} onAuth={setUser} />
    </Box>
  );
}

export default App;
