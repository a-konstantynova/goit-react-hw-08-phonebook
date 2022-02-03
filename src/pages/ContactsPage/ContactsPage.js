import { useSelector } from 'react-redux';
import Section from '../../components/Section';
import Form from '../../components/Form';
import Filter from '../../components/Filter';
import ContactsList from '../../components/ContactsList';
import Loader from '../../components/Loader';
import s from './ContactsPage.module.css';

export default function ContactsPage() {
  const isLoading = useSelector(state => state.contacts.loading);
  return (
    <>
      <h1 className={s.title}>Phonebook</h1>
      <Section>
        <Form />
      </Section>
      <h2 className={s.title_contacts}>Contacts</h2>
      <Section>
        <Filter />
        {isLoading && <Loader />}
        <ContactsList />
      </Section>
    </>
  );
}
