import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../redux/auth/selectors';
import { setRefreshToken } from '../redux/auth/slice';

const instance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

instance.interceptors.response.use(
  response => response,
  async error => {
    const dispatch = useDispatch();
    if (error.response.status === 401) {
      const { refreshToken } = useSelector(selectAuth);
      try {
        const { data } = await instance.post('/api/auth/refresh', { refreshToken });
        setToken(data.accessToken);
        dispatch(setRefreshToken(data.refreshToken));
        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const register = async data => {
  const { data: result } = await instance.post('/api/auth/register', data);
  setToken(result.accessToken);
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/api/auth/login', data);
  setToken(result.accessToken);
  return result;
};

export const logout = async () => {
  const { data } = await instance.post('/api/auth/logout');
  setToken();
  return data;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/api/auth/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};
