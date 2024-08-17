import axios from 'axios';
const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;
const JWT_TOKEN = import.meta.env.VITE_APP_ACCESS_JWT_TOKEN;

const axiosInstance = axios.create({
  baseURL: `${SERVER_URL}`,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${JWT_TOKEN}`,
  },
  timeout: 10000,
});

export default axiosInstance;
