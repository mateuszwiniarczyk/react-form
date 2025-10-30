import { createContext, useCallback, useContext, useMemo } from 'react';

import { v4 as uuid } from 'uuid';
import type { Contact } from '../types';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface ContactsContextValue {
  contacts: Contact[];
  addContact: (contact: Omit<Contact, 'id'>) => void;
  deleteContact: (id: string) => void;
}

export const ContactsContext = createContext<ContactsContextValue | null>(null);

export const ContactsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { value: contacts, saveValue: setContacts } = useLocalStorage<
    Contact[]
  >('contacts', []);

  const addContact = useCallback(
    (contact: Omit<Contact, 'id'>) => {
      setContacts([...contacts, { id: uuid(), ...contact }]);
    },
    [contacts, setContacts],
  );

  const deleteContact = useCallback(
    (id: string) => {
      setContacts(contacts.filter((contact) => contact.id !== id));
    },
    [contacts, setContacts],
  );

  const contextValue = useMemo(
    () => ({ contacts, addContact, deleteContact }),
    [contacts, addContact, deleteContact],
  );

  return (
    <ContactsContext.Provider value={contextValue}>
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => {
  const ctx = useContext(ContactsContext);
  if (!ctx) throw new Error('useContacts must be used within ContactsProvider');
  return ctx;
};
