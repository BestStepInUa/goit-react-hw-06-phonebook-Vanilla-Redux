import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import ContactsFilterStyled from './ContactsFilter.styled';

const ContactsFilter = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.filter);
  return (
    <ContactsFilterStyled>
      Find contacts by name:
      <input
        type="text"
        value={name}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </ContactsFilterStyled>
  );
};

export default ContactsFilter;
