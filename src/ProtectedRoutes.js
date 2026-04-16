import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to login page with a message (optional)
    return <Navigate to="/login" state={{ from: '/career', message: 'Please login to access Career page' }} replace />;
  }

  return children;
};

export default ProtectedRoute;