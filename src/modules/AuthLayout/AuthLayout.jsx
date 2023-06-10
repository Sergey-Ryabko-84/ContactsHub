import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { refreshUser } from '../../redux/auth/operations';
import { setTokens } from '../../redux/auth/slice';

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();
  const [queryParams] = useSearchParams();

  useEffect(() => {
    const refreshToken = queryParams.get('refreshToken');
    const accessToken = queryParams.get('accessToken');

    if (refreshToken) {
      dispatch(setTokens({ refreshToken, accessToken }));
    }

    dispatch(refreshUser());
  }, [dispatch, queryParams]);

  return children;
};

export default AuthLayout;
