
// DEMO DATA ONLY - No backend API

const demoComments = {
  'demo-event-1': [
    { _id: 'c1', user: { name: 'Aarav Sharma', role: 'student' }, text: 'Super excited for this hackathon!', createdAt: '2025-10-01T10:00:00.000Z' },
    { _id: 'c2', user: { name: 'Priya Singh', role: 'teacher' }, text: 'Don’t forget to register your teams!', createdAt: '2025-10-02T12:30:00.000Z' }
  ],
  'demo-event-2': [
    { _id: 'c3', user: { name: 'Rahul Verma', role: 'student' }, text: 'Last year’s fest was amazing!', createdAt: '2025-10-05T09:15:00.000Z' }
  ],
  'demo-event-3': [
    { _id: 'c4', user: { name: 'Simran Kaur', role: 'student' }, text: 'Will there be a robotics competition?', createdAt: '2025-10-10T14:45:00.000Z' }
  ]
};

export const fetchComments = async (eventId) => {
  // Return demo comments for the event, or an empty array
  return demoComments[eventId] || [];
};

export const addComment = async (eventId, text) => {
  // Simulate adding a comment
  return {
    _id: 'c' + Math.floor(Math.random() * 10000),
    user: { name: 'Demo User', role: 'student' },
    text,
    createdAt: new Date().toISOString()
  };
};

export const deleteComment = async (commentId) => {
  // Simulate successful deletion
  return { success: true };
};
