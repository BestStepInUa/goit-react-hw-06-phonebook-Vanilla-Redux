import { useMemo } from 'react';
import ContactItem from './ContactItem';

import ContactsListSteled from './ContactsList.styled';

const ContactsList = ({ contacts }) => {
  const contactItems = useMemo(
    () =>
      contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          // deleteContact={deleteContact}
        />
      )),
    [contacts]
  );
  return (
    <ContactsListSteled>
      <h2>Contacts</h2>
      <ul>{contactItems}</ul>
    </ContactsListSteled>
  );
};

export default ContactsList;
