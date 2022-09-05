import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuth();
  if (checkingStatus) {
    return '';
  }

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};
