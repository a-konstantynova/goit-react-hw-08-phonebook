import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div className={s.container}>
      <span className={s.text}>Wellcome to phonebook, {name}!</span>

      <button
        type="button"
        className={s.btn__out}
        onClick={() => dispatch(logout())}
      >
        Log out
      </button>
    </div>
  );
}
