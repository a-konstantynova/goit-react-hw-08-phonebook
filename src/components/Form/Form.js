import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getContactsList } from '../../redux/contacts/contacts-selectors';
import s from './Form.module.css';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contactsList = useSelector(getContactsList);

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    addContacts({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const addContacts = contact => {
    contactsList.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    )
      ? alert(`${name} is already in contacts.`)
      : dispatch(addContact(contact));
  };

  return (
    <form className={s.form__container} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span className={s.name__input}>Name</span>
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
        <span className={s.name__input}>Number</span>
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          placeholder="Enter phone number"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={s.add__btn}>
        Add contact
      </button>
    </form>
  );
}
