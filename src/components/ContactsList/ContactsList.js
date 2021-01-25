import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/contacts-operations';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import propTypes from 'prop-types';
import s from './ContactsList.module.css';

export default function ContactsList() {
  const filterContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {filterContacts.map(({ id, name, phone }) => (
          <li key={id}>
            <p className={s.nameText}>
              {name}: <span>{phone}</span>
            </p>
            <button type="button" onClick={() => dispatch(deleteContacts(id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactsList.propTypes = {
  onDeleteBtn: propTypes.func,
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string,
      name: propTypes.string,
      phone: propTypes.string,
    }),
  ),
};