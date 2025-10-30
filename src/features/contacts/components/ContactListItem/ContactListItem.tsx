import type { Contact } from '../../types';

import {
  ContactInfo,
  Wrapper,
  ContactName,
  DeleteContactButton,
} from './ContactListItem.styles';
import DeleteIcon from '@/assets/delete.svg?react';
import EmailIcon from '@/assets/email.svg?react';
import PhoneIcon from '@/assets/phone.svg?react';
import { useContacts } from '../../context';
import { ContactDetail } from '../ContactDetail';

type ContactListItemProps = {
  contact: Contact;
};

export const ContactListItem = ({ contact }: ContactListItemProps) => {
  const { deleteContact } = useContacts();

  return (
    <Wrapper>
      <ContactInfo>
        <ContactName title={contact.firstName}>{contact.firstName}</ContactName>
        <ContactDetail
          icon={<EmailIcon width={16} height={16} aria-hidden="true" />}
          text={contact.email}
        />
        <ContactDetail
          icon={<PhoneIcon width={16} height={16} aria-hidden="true" />}
          text={`${contact.phoneNumber}`}
          variant="green"
        />
      </ContactInfo>
      <DeleteContactButton
        onClick={() => deleteContact(contact.id)}
        aria-label="Usuń kontakt"
      >
        <DeleteIcon width={20} height={20} aria-hidden="true" />
      </DeleteContactButton>
    </Wrapper>
  );
};
