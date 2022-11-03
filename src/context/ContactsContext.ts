import { createContext } from "react";

export interface Contact {
  id: number;
  contact: number;
  name: string;
}

interface Context {
  contacts: Contact[];
  createContact: (name: string, contact: number) => void;
  updateContact: (
    id: number,
    updatedName: string,
    updatedContact: number
  ) => void;
  deleteContact: (id: number) => void;
}

const initialContext: Context = {
  contacts: [],
  createContact: (name: string, contact: number) => {},
  updateContact: (
    id: number,
    updatedName: string,
    updatedContact: number
  ) => {},
  deleteContact: (id: number) => {},
};

const ContactsContext = createContext(initialContext);

export default ContactsContext;
