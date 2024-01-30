import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import AddContactForm from 'components/AddContactForm';
import ContactsList from 'components/ContactsList';
import ContactsFilter from 'components/ContactsFilter';
import AppContainer from './App.styled';

const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  return (
    <AppContainer>
      <h1>Phonebook</h1>
      <AddContactForm />
      <ContactsFilter />
      <ContactsList />
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
    </AppContainer>
  );
};

export default App;
