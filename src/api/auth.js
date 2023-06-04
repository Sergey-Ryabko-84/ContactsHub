import axios from 'axios';

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
    if (error.response.status === 401) {
      let { refreshToken } = JSON.parse(localStorage.getItem('persist:auth'));
      refreshToken = refreshToken.slice(1, refreshToken.length - 1);
      try {
        const { data } = await instance.post('/api/auth/refresh', { refreshToken });
        error.config.headers.authorization = `Bearer ${data.accessToken}`;
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
