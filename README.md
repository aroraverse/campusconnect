# CampusConnect – Student Event & Notice Management System

A modern platform for college clubs and faculty to post events, notices, and updates. Built with Node.js, Express, MongoDB, and React (Material UI).

## Features
- Role-based access: Student, Teacher, Admin
- CRUD for Events, Notices, Clubs, Users
- Filtering events by date, category, department
- Local authentication (email/password)
- Eye-catching, responsive UI
- Live integration with backend

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB Atlas or local MongoDB

### Backend Setup
1. `cd server`
2. Create a `.env` file:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   SESSION_SECRET=your_session_secret
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the backend:
   ```sh
   npm start
   ```

### Frontend Setup
1. `cd client`
2. Create a `.env` file:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the frontend:
   ```sh
   npm start
   ```

### Usage
- Register as a user (default role: student)
- Admin/teacher can create events, notices, and clubs
- Role-based UI: Only authorized users see create buttons
- Filter and view events, notices, and clubs

## Project Structure
- `server/` – Express backend, MongoDB models, authentication
- `client/` – React frontend, Material UI, API integration

## Customization
- Update branding, colors, and logo in `client/src/App.js` and `App.css`
- Add more features as needed (comments, notifications, etc.)

## License
MIT
