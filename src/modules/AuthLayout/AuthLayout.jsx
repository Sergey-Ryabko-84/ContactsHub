import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';
import { useLocation } from 'react-router-dom';
import { setTokens } from '../../redux/auth/slice';

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    const refreshToken = queryParams.get('refreshToken');
    const accessToken = queryParams.get('accessToken');

    if (refreshToken) {
      console.log(refreshToken, accessToken);
      dispatch(setTokens({ refreshToken, accessToken }));
    }

    dispatch(refreshUser());
  }, [dispatch, location]);

  return children;
};

export default AuthLayout;
