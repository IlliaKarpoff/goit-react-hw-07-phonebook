import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import s from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getIsAdded } from '../../redux/contacts/contacts-selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const isAdded = useSelector(getIsAdded);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (isAdded(name)) {
      return alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(name, phone));
    }

    setName('');
    setPhone('');
  };

  return (
    <>
      <form className={s.form} onSubmit={e => handleSubmit(e)}>
        <label id="name" htmlFor="name">
          Name
        </label>
        <input
          className={s.input}
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label id="phone" htmlFor="phone">
          Phone
        </label>
        <input
          className={s.input}
          type="tel"
          name="phone"
          id="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <button type="submit" disabled={!(name && phone)} className={s.button}>
          add contact
        </button>
      </form>
    </>
  );
}

ContactForm.propTypes = {
  onAddContacts: propTypes.func,
};