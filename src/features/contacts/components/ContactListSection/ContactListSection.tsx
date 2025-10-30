import { useContacts } from '../../context';
import { ContactList } from '../ContactList';
import { ContactListHeading, Wrapper } from './ContactListSection.styles';

export const ContactListSection = () => {
  const { contacts } = useContacts();
  const isContactListEmpty = contacts.length === 0;

  return (
    <Wrapper>
      <ContactListHeading>
        Zapisane kontakty ({contacts.length})
      </ContactListHeading>

      {isContactListEmpty ? <p>Brak zapisanych kontaktów</p> : <ContactList />}
    </Wrapper>
  );
};
