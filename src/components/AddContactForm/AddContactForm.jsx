import { useReducer } from 'react';
import AddContactFormStyled from './Addcontactform.styled.';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { addContact } from 'redux/contactsSlice';

const INITIAL_STATE = {
  name: '',
  number: '',
};

function reducer(prevState, action) {
  if (action.type === 'reset') {
    return INITIAL_STATE;
  } else {
    return {
      ...prevState,
      [action.type]: action.payload,
    };
  }
}

const AddContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handelChange = evt => {
    const { name, value } = evt.currentTarget;
    dispatch({ type: name, payload: value });
  };

  const handelFormSubmit = evt => {
    evt.preventDefault();
    const name = evt.target.elements.name.value;
    const number = evt.target.elements.number.value;
    const isDublicated = contacts.find(contact => contact.name === name);
    if (isDublicated) {
      toast.error(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    dispatch({ type: 'reset', payload: INITIAL_STATE });
  };

  return (
    <AddContactFormStyled onSubmit={handelFormSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={state.name}
          required
          onChange={handelChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={state.number}
          required
          onChange={handelChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </AddContactFormStyled>
  );
};

export default AddContactForm;
