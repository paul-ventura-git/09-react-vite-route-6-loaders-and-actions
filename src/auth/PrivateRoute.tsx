import { Outlet, Navigate } from 'react-router-dom';
import { useLoginContext } from '../context/LoginContext';

const PrivateRoute = () => {
  const [user] = useLoginContext();
  return user!=="" ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;