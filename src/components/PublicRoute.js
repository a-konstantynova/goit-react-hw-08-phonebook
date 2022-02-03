import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';

export default function PublicRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldNavigate = isLoggedIn && restricted;
  return shouldNavigate ? <Navigate to="/contacts" /> : children;
}
