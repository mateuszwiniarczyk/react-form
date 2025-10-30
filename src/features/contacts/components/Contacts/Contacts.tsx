import { ContactForm } from '../ContactForm';
import { Wrapper } from './Contacts.styles';

export const Contacts = () => (
  <Wrapper>
    <ContactForm />
    <div
      style={{
        display: 'flex',
        flex: '1 1 50%',
      }}
    ></div>
  </Wrapper>
);
