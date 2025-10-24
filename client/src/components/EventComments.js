import React, { useEffect, useState } from 'react';
import { fetchComments, addComment, deleteComment } from '../commentApi';
import { Box, Typography, TextField, Button, IconButton, List, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function EventComments({ eventId, user }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchComments(eventId).then(setComments).finally(() => setLoading(false));
  }, [eventId]);

  const handleAdd = async () => {
    setError('');
    try {
      const comment = await addComment(eventId, text);
      setComments(c => [...c, comment]);
      setText('');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to add comment');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteComment(id);
      setComments(c => c.filter(com => com._id !== id));
    } catch {}
  };

  return (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>Comments</Typography>
      {loading ? <Typography>Loading...</Typography> : (
        <List dense>
          {comments.map(com => (
            <ListItem key={com._id} secondaryAction={user && user.role === 'admin' ? (
              <IconButton edge="end" onClick={() => handleDelete(com._id)}><DeleteIcon /></IconButton>
            ) : null}>
              <ListItemText primary={com.text} secondary={com.user?.name || 'User'} />
            </ListItem>
          ))}
          {comments.length === 0 && <Typography color="text.secondary">No comments yet.</Typography>}
        </List>
      )}
      {user && (
        <Box sx={{ display: 'flex', mt: 1 }}>
          <TextField size="small" value={text} onChange={e => setText(e.target.value)} label="Add a comment" fullWidth />
          <Button onClick={handleAdd} disabled={!text} sx={{ ml: 1 }}>Post</Button>
        </Box>
      )}
      {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}
    </Box>
  );
}
