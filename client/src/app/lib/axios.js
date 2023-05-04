import axios from 'axios';

const api = axios.create({
  // baseURL: `${import.meta.env.VITE_SERVER_URL}`,
  baseURL: 'https://extrusora-app.onrender.com',
});
export default api;