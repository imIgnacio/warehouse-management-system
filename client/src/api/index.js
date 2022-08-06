import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${Cookies.get('jwt')}`,
  },
});

export default axiosInstance;
