import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../redux/auth/selectors';

const PrivateRoute = ({ redirectTo = '/auth/login' }) => {
  const { isLoggedIn, accessToken } = useSelector(selectAuth);

  if (!isLoggedIn && accessToken) {
    return <p>...Loading</p>;
  }

  if (!isLoggedIn && !accessToken) {
    return <Navigate to={redirectTo} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
