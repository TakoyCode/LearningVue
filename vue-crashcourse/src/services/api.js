import axios from 'axios';

// Configure axios
const api = axios.create({
  baseURL: 'https://vue-crashcourse-json-server.onrender.com/',
  //   baseURL: '/api',
});

export default api;
