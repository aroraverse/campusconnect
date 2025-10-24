import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchNotifications = async () => {
  const res = await axios.get(`${API_BASE}/notifications`, { withCredentials: true });
  return res.data;
};

export const markNotificationRead = async (id) => {
  const res = await axios.post(`${API_BASE}/notifications/read/${id}`, {}, { withCredentials: true });
  return res.data;
};
