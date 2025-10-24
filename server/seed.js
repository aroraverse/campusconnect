// Run this script with: node seed.js (from the server directory)
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Club = require('./models/Club');
const Event = require('./models/Event');
const bcrypt = require('bcryptjs');

const MONGO_URI = process.env.MONGO_URI;

async function seed() {
  await mongoose.connect(MONGO_URI);
  await User.deleteMany({});
  await Club.deleteMany({});
  await Event.deleteMany({});

  // Users
  const admin = await User.create({
    name: 'Priya Sharma',
    username: 'priya.admin',
    email: 'admin@campus.edu',
    password: await bcrypt.hash('admin123', 10),
    role: 'admin',
    department: 'Administration'
  });
  const teacher = await User.create({
    name: 'Dr. Rakesh Mehta',
    username: 'rakesh.mehta',
    email: 'rakesh.mehta@campus.edu',
    password: await bcrypt.hash('teacher123', 10),
    role: 'teacher',
    department: 'Computer Science'
  });
  const student = await User.create({
    name: 'Aarav Singh',
    username: 'aarav.singh',
    email: 'aarav.singh@campus.edu',
    password: await bcrypt.hash('student123', 10),
    role: 'student',
    department: 'Electronics'
  });

  // Clubs
  const codingClub = await Club.create({
    name: 'Coding Club',
    description: 'A club for coding enthusiasts. Organizes hackathons and coding workshops.',
    facultyAdvisor: teacher._id
  });
  const ecoClub = await Club.create({
    name: 'Eco Club',
    description: 'Promotes environmental awareness and organizes green campus drives.',
    facultyAdvisor: teacher._id
  });

  // Events
  await Event.create([
    {
      title: 'Campus Hackathon 2025',
      description: '24-hour coding marathon with exciting prizes. Open to all departments.',
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      category: 'Hackathon',
      department: 'Computer Science',
      club: codingClub._id,
      createdBy: teacher._id
    },
    {
      title: 'Eco Awareness Drive',
      description: 'Join us for a campus clean-up and tree plantation event.',
      date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      category: 'Environment',
      department: 'All',
      club: ecoClub._id,
      createdBy: teacher._id
    },
    {
      title: 'AI Seminar: The Future of Tech',
      description: 'Guest lecture by industry experts on Artificial Intelligence trends.',
      date: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),
      category: 'Seminar',
      department: 'Computer Science',
      club: codingClub._id,
      createdBy: admin._id
    },
    {
      title: 'Notice: Mid-Sem Exams',
      description: 'Mid-semester exams will begin from Nov 15. Check your department notice board.',
      date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
      category: 'notice',
      department: 'All',
      createdBy: admin._id
    },
    {
      title: 'Notice: Library Timings',
      description: 'Library will remain open till 10 PM during exam week.',
      date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      category: 'notice',
      department: 'All',
      createdBy: admin._id
    }
  ]);

  console.log('Demo data seeded!');
  process.exit();
}

seed();
