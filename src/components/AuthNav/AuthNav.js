import { NavLink } from 'react-router-dom';
import s from '../Navigation/Navigation.module.css';

export default function AuthNav() {
  return (
    <ul className={s.auth}>
      <li className={s.item}>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? `${s.activeLink}` : `${s.link}`
          }
        >
          Login
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink
          to="/registration"
          className={({ isActive }) =>
            isActive ? `${s.activeLink}` : `${s.link}`
          }
        >
          Registration
        </NavLink>
      </li>
    </ul>
  );
}
