
// DEMO DATA ONLY - No backend API

export const fetchEvents = async (params) => {
  // Return a list of demo events
  return [
    { _id: 'demo-event-1', title: 'Campus Hackathon 2025', description: '24-hour coding marathon with exciting prizes. Open to all departments.', date: '2025-10-31T09:00:00.000Z', category: 'hackathon', department: 'CSE' },
    { _id: 'demo-event-2', title: 'Cultural Fest', description: 'Music, dance, and drama performances by students.', date: '2025-11-10T18:00:00.000Z', category: 'cultural', department: 'All' },
    { _id: 'demo-event-3', title: 'AI & Robotics Workshop', description: 'Hands-on workshop on AI and robotics with industry experts.', date: '2025-11-15T10:00:00.000Z', category: 'workshop', department: 'ECE' },
    { _id: 'demo-event-4', title: 'Sports Meet', description: 'Annual sports meet with inter-departmental competitions.', date: '2025-12-01T08:00:00.000Z', category: 'sports', department: 'All' },
    { _id: 'demo-event-5', title: 'Photography Contest', description: 'Showcase your photography skills and win exciting prizes.', date: '2025-11-20T14:00:00.000Z', category: 'contest', department: 'Media' },
    { _id: 'demo-event-6', title: 'Startup Pitch Day', description: 'Pitch your startup ideas to real investors.', date: '2025-12-05T11:00:00.000Z', category: 'entrepreneurship', department: 'MBA' },
    { _id: 'demo-event-7', title: 'Literary Quiz', description: 'Test your literary knowledge in this fun quiz.', date: '2025-11-25T16:00:00.000Z', category: 'quiz', department: 'English' },
    { _id: 'demo-event-8', title: 'Eco Drive', description: 'Campus-wide tree plantation and clean-up drive.', date: '2025-12-10T09:30:00.000Z', category: 'environment', department: 'All' },
    { _id: 'demo-event-9', title: 'Alumni Meet', description: 'Reconnect with alumni and expand your network.', date: '2025-12-15T17:00:00.000Z', category: 'networking', department: 'All' },
    { _id: 'demo-event-10', title: 'Coding Battle Royale', description: 'Competitive coding event with live leaderboards.', date: '2025-11-28T13:00:00.000Z', category: 'coding', department: 'CSE' },
    { _id: 'demo-event-11', title: 'Fashion Show', description: 'Showcase your style and creativity on the ramp.', date: '2025-12-18T19:00:00.000Z', category: 'fashion', department: 'Fashion' },
    { _id: 'demo-event-12', title: 'Film Screening Night', description: 'Watch award-winning short films with friends.', date: '2025-12-22T20:00:00.000Z', category: 'film', department: 'Media' },
    { _id: 'demo-event-13', title: 'Chess Tournament', description: 'Battle it out in the annual chess tournament.', date: '2025-12-03T15:00:00.000Z', category: 'sports', department: 'All' },
    { _id: 'demo-event-14', title: 'Food Carnival', description: 'Enjoy delicious food from around the world.', date: '2025-12-12T12:00:00.000Z', category: 'food', department: 'All' },
    { _id: 'demo-event-15', title: 'Open Mic Night', description: 'Sing, recite poetry, or perform stand-up comedy.', date: '2025-12-08T18:30:00.000Z', category: 'entertainment', department: 'All' },
    { _id: 'demo-event-16', title: 'Yoga & Wellness Camp', description: 'Relax and rejuvenate with yoga and wellness sessions.', date: '2025-12-20T07:00:00.000Z', category: 'wellness', department: 'All' },
    { _id: 'demo-event-17', title: 'Science Exhibition', description: 'Explore innovative science projects by students.', date: '2025-12-25T10:00:00.000Z', category: 'exhibition', department: 'Science' }
  ];
};

export const fetchClubs = async () => {
  // Return a list of demo clubs
  return [
    { _id: 'club-1', name: 'Coding Club', description: 'For all coding enthusiasts.' },
    { _id: 'club-2', name: 'Drama Club', description: 'For drama and theatre lovers.' },
    { _id: 'club-3', name: 'Photography Club', description: 'Capture the world through your lens.' },
    { _id: 'club-4', name: 'Music Club', description: 'Jam, perform, and learn music together.' },
    { _id: 'club-5', name: 'Eco Club', description: 'Promoting sustainability and green initiatives.' },
    { _id: 'club-6', name: 'Entrepreneurship Cell', description: 'For aspiring entrepreneurs and innovators.' },
    { _id: 'club-7', name: 'Literary Society', description: 'Book readings, debates, and creative writing.' },
    { _id: 'club-8', name: 'Robotics Club', description: 'Build and program robots for fun and competition.' },
    { _id: 'club-9', name: 'Fashion Club', description: 'For those passionate about style and design.' }
  ];
};

export const fetchNotices = async () => {
  // Return a list of demo notices
  return [
    { _id: 'notice-1', title: 'Exam Schedule Released', description: 'Check the portal for the latest exam schedule.', date: '2025-11-01T08:00:00.000Z' },
    { _id: 'notice-2', title: 'Holiday Notice', description: 'Campus will remain closed on 2nd Nov for Diwali.', date: '2025-11-02T00:00:00.000Z' },
    { _id: 'notice-3', title: 'COVID-19 Guidelines', description: 'Masks are mandatory in all indoor spaces. Follow social distancing.', date: '2025-10-30T09:00:00.000Z' },
    { _id: 'notice-4', title: 'Library Renovation', description: 'Library will be closed for renovation from 5th Nov to 20th Nov.', date: '2025-11-05T09:00:00.000Z' },
    { _id: 'notice-5', title: 'Blood Donation Camp', description: 'Join the blood donation camp on 12th Nov at the main hall.', date: '2025-11-12T10:00:00.000Z' },
    { _id: 'notice-6', title: 'Placement Drive', description: 'Top companies visiting campus for placements on 18th Nov.', date: '2025-11-18T09:00:00.000Z' }
  ];
};
