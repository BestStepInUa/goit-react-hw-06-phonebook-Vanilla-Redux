import { nanoid } from 'nanoid';

const initialState = [];

export const addContact = ({ name, number }) => {
  return {
    type: 'contacts/add',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const delContact = id => {
  return {
    type: 'contacts/del',
    payload: id,
  };
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/add':
      return [...state, action.payload];

    case 'contacts/del':
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};
