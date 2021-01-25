import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import s from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <label className={s.text} name="filter" htmlFor="filter" value={filter}>
        Find contacts by name
      </label>
      <input
        value={filter}
        type="text"
        id="filter"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </>
  );
}