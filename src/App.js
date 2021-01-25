import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contacts/contacts-operations';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { getContacts, getIsLoading } from './redux/contacts/contacts-selectors';
import Loader from 'react-loader-spinner';
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import s from './App.module.css';

export default function App() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook" className={s.container} >
        <ContactForm />
      </Section>

      {isLoading ? (
        <Loader type='Oval' color="#000" height={80} width={80} className={s.container}/>
      ) : null}

      {contacts.length ? (
        <Section title="Contacts" className={s.container} >
          <Filter  />
          <ContactsList />
        </Section>
      ) : null}
    </>
  );
}