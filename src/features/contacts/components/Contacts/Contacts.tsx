import { ContactsProvider } from '../../context';
import { ContactForm } from '../ContactForm';
import { Wrapper } from './Contacts.styles';

export const Contacts = () => (
  <ContactsProvider>
    <Wrapper>
      <ContactForm />
      <div
        style={{
          display: 'flex',
          flex: '1 1 50%',
        }}
      ></div>
    </Wrapper>
  </ContactsProvider>
);
