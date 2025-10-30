import { useContacts } from '../../context';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { StyledContactList, ContactListWrapper } from './ContactList.styles';

export const ContactList = () => {
  const { contacts } = useContacts();

  return (
    <ContactListWrapper>
      <StyledContactList>
        {contacts.map((contact) => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </StyledContactList>
    </ContactListWrapper>
  );
};
