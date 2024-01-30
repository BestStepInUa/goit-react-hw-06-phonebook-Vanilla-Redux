import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import ContactsListSteled from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const visibleContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContactItems = useMemo(
    () =>
      visibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      )),
    [visibleContacts]
  );
  return (
    <ContactsListSteled>
      <h2>Contacts</h2>
      <ul>{visibleContactItems}</ul>
    </ContactsListSteled>
  );
};

export default ContactsList;
