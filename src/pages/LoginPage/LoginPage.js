import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import s from './LoginPage.module.css';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form className={s.form__container} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span className={s.name__input}>Email</span>
          <input
            className={s.input}
            type="email"
            name="email"
            title="Введите Ваш email"
            placeholder="Enter email"
            required
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          <span className={s.name__input}>Password</span>
          <input
            className={s.input}
            type="password"
            name="password"
            title="Введите Ваш пароль"
            placeholder="Enter password"
            required
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={s.add__btn}>
          Login
        </button>
      </form>
    </>
  );
}
