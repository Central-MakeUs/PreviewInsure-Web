import axios from 'axios';
const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;

const axiosInstance = axios.create({
  baseURL: `${SERVER_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 1000,
});

export default axiosInstance;
