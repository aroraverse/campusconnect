
// DEMO DATA ONLY - No backend API

// Simulate registration for an event
export const registerForEvent = async (eventId) => {
  // Simulate a successful registration
  return { success: true, eventId };
};

// Simulate getting registration count for an event
export const getEventRegistrationCount = async (eventId) => {
  // Return a realistic count based on eventId for demo
  const demoCounts = {
    'demo-event-1': 87,
    'demo-event-2': 142,
    'demo-event-3': 59,
    'demo-event-4': 203,
    'demo-event-5': 31
  };
  return demoCounts[eventId] || Math.floor(Math.random() * 80 + 20);
};

// Simulate getting user registrations
export const getUserRegistrations = async (userId) => {
  // Return a more realistic and visually appealing list
  return [
    {
      event: 'demo-event-1',
      eventTitle: 'Campus Hackathon 2025',
      registeredAt: '2025-10-10T09:30:00.000Z',
      status: 'Confirmed',
      badge: 'Top 10%'
    },
    {
      event: 'demo-event-2',
      eventTitle: 'Cultural Fest',
      registeredAt: '2025-09-25T15:45:00.000Z',
      status: 'Confirmed',
      badge: 'Performer'
    },
    {
      event: 'demo-event-3',
      eventTitle: 'AI & Robotics Workshop',
      registeredAt: '2025-10-01T12:00:00.000Z',
      status: 'Waitlisted',
      badge: 'Early Bird'
    },
    {
      event: 'demo-event-4',
      eventTitle: 'Sports Meet',
      registeredAt: '2025-08-20T10:15:00.000Z',
      status: 'Confirmed',
      badge: 'Participant'
    },
    {
      event: 'demo-event-5',
      eventTitle: 'Photography Contest',
      registeredAt: '2025-07-15T17:20:00.000Z',
      status: 'Confirmed',
      badge: 'Shortlisted'
    }
  ];
};
