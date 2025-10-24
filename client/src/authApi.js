import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const login = async (email, password) => {
  const res = await axios.post(`${API_BASE}/auth/login`, { email, password }, { withCredentials: true });
  return res.data;
};

export const register = async (data) => {
  const res = await axios.post(`${API_BASE}/auth/register`, data);
  return res.data;
};

export const logout = async () => {
  const res = await axios.post(`${API_BASE}/auth/logout`, {}, { withCredentials: true });
  return res.data;
};

export const getCurrentUser = async () => {
  const res = await axios.get(`${API_BASE}/auth/user`, { withCredentials: true });
  return res.data;
};
