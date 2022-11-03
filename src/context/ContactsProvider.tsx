import React, { useState } from "react";

import ContactsContext, { Contact } from "./ContactsContext";

const ContactsProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const createContact = (name: string, contact: number) => {
    const newContact: Contact = { id: Math.random(), contact, name };
    setContacts((prevState) => [...prevState, newContact]);
  };

  const updateContact = (
    id: number,
    updatedName: string,
    updatedContact: number
  ) => {
    const updatedContactDetails: Contact = {
      id,
      name: updatedName,
      contact: updatedContact,
    };
    const copiedContacts = [...contacts];
    copiedContacts.splice(
      contacts.findIndex((contact) => contact.id === id),
      1,
      updatedContactDetails
    );
    setContacts(copiedContacts);
  };

  const deleteContact = (id: number) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== id)
    );
  };

  const updatedContext = {
    contacts,
    createContact,
    updateContact,
    deleteContact,
  };

  return (
    <ContactsContext.Provider value={updatedContext}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;
