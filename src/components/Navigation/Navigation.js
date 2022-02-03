import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import s from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav className={s.wrapper}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${s.activeLink}` : `${s.link}`
            }
          >
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          {isLoggedIn && (
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? `${s.activeLink}` : `${s.link}`
              }
            >
              Contacts
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
