import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const RestrictedRoute = ({ redirectTo = '/app/contacts' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to={redirectTo} />;
  }

  return <Outlet />;
};

export default RestrictedRoute;
