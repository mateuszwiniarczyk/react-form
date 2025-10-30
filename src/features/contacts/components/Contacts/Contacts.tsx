import { ContactsProvider } from '../../context';
import { ContactForm } from '../ContactForm';
import { ContactListSection } from '../ContactListSection';
import { Wrapper } from './Contacts.styles';

export const Contacts = () => (
  <ContactsProvider>
    <Wrapper>
      <ContactForm />
      <ContactListSection />
    </Wrapper>
  </ContactsProvider>
);
