import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `https://reqres.in/api/login`,
  method: 'post',
});

export default axiosInstance;
