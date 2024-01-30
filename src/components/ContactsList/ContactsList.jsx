import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import ContactsListSteled from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const normalizedFilter = filter.toLocaleLowerCase();

  const visibleContactItems = useMemo(() => {
    const visibleContacts = () => {
      return contacts.filter(({ name }) =>
        name.toLocaleLowerCase().includes(normalizedFilter)
      );
    };
    visibleContacts.map(contact => (
      <ContactItem key={contact.id} contact={contact} />
    ));
  }, [contacts, normalizedFilter]);

  return (
    <ContactsListSteled>
      <h2>Contacts</h2>
      <ul>{visibleContactItems}</ul>
    </ContactsListSteled>
  );
};

export default ContactsList;
