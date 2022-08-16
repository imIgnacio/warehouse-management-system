import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${Cookies.get('jwt')}`,
  },
});

axiosInstance.interceptors.request.use(async req => {
  const token = await Cookies.get('jwt');

  if (token) req.headers.Authorization = `Bearer ${token}`;

  return req;
});

export default axiosInstance;
