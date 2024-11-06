import axios from 'axios';

const api = axios.create({
  baseURL: 'https://marcconrad.com/uob/banana/api.php'
});

export default api;
