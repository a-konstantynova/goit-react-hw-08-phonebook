import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from './components/AppBar';
import Loader from './components/Loader';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { fetchContacts } from './redux/contacts/contacts-operations';
import { refreshUser } from './redux/auth/auth-operations';
import {
  getToken,
  getIsLoggedIn,
} from './redux/auth/auth-selectors';
import s from './App.module.css';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage.js' /* webpackChunkName: "home-page" */),
);
const ContactsPage = lazy(() =>
  import(
    './pages/ContactsPage/ContactsPage.js' /* webpackChunkName: "contacts-page" */
  ),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage/LoginPage.js' /* webpackChunkName: "login-page" */),
);
const RegistrationPage = lazy(() =>
  import(
    './pages/RegistrationPage/RegistrationPage.js' /* webpackChunkName: "registration-page" */
  ),
);

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    dispatch(fetchContacts(token));
  }, [dispatch, isLoggedIn, token]);

  useEffect(() => {
    dispatch(refreshUser(token));
  }, [dispatch, token]);

  return (
    <div className={s.container}>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/goit-react-hw-08-phonebook"
            element={<Navigate to="/" />}
          />
          <Route
            path="/"
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/registration"
            element={
              <PublicRoute restricted>
                <RegistrationPage />
              </PublicRoute>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}
