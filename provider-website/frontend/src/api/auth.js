import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

export async function login(username, password) {
  const res = await API.post('/login', { username, password });
  return res.data;
}

export async function getDashboard(token) {
  const res = await API.get('/dashboard', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
}
