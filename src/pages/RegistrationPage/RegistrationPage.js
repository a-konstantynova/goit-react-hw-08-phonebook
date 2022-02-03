import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registration } from '../../redux/auth/auth-operations';
import s from './RegistrationPage.module.css';

export default function RegistrationPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(registration({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form className={s.form__container} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span className={s.name__input}>Name</span>
          <input
            className={s.input}
            type="text"
            name="name"
            title="Имя может состоять только из букв, апострофа, тире
          и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de
          Castelmore d'Artagnan и т. п."
            placeholder="Enter name"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
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
            placeholder="Create a password"
            required
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={s.add__btn}>
          Registration
        </button>
      </form>
    </>
  );
}
