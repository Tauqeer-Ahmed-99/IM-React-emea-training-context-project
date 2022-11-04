import React, { useContext, useState } from "react";

import TableHeader from "../components/TableHeader/TableHeader";
import TableItem from "../components/TableItem/TableItem";
import Dialog from "../components/Dialog/Dialog";
import CloseIcon from "../assets/close.svg";

import "./homescreen.css";
import AddressContext from "../context/AddressContext/AddressContext";

const HomeScreen = () => {
  const [isCreatingNewContact, setCreatingNewContact] = useState(false);
  const [isFormOpen, setFormOpen] = useState(false);
  const [contactIdToEdit, setContactIdToEdit] = useState<null | number>(null);
  const [formValues, setFormValues] = useState({ name: "", contact: "" });

  const addressesContext = useContext(AddressContext);

  const handleNewContactClick = () => {
    setCreatingNewContact(true);
    setFormOpen(true);
  };

  const resetForm = () => {
    setFormValues({ name: "", contact: "" });
  };
  const closeForm = () => {
    setCreatingNewContact(false);
    setFormOpen(false);
    resetForm();
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevState) => ({ ...prevState, name: event.target.value }));
  };

  const handleContactChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevState) => ({
      ...prevState,
      contact: event.target.value,
    }));
  };

  const handleCreateORUpdateClick = (id?: number) => {
    if (isCreatingNewContact) {
      addressesContext.createAddress(formValues.name, +formValues.contact);
    } else {
      addressesContext.updateAddress(
        id as number,
        formValues.name,
        +formValues.contact
      );
    }
    closeForm();
  };

  const handleEditClick = (id: number) => {
    setContactIdToEdit(id);
    const selectedContact = addressesContext.addresses.find(
      (contact) => contact.id === id
    );
    if (selectedContact) {
      setFormValues({
        name: selectedContact.name,
        contact: selectedContact.contact.toString(),
      });
    }
    setFormOpen(true);
  };

  return (
    <div className="homescreen">
      <header>
        <h2>IM Contacts Book</h2>
        <button onClick={handleNewContactClick}>New Contact</button>
      </header>
      <Dialog open={isFormOpen} onClose={closeForm}>
        <div className="dialog-header">
          <span>
            {isCreatingNewContact ? "Create a new contact" : "Update Contact"}
          </span>
          <img src={CloseIcon} alt="Close" onClick={closeForm} />
        </div>
        <div className="dialog-content">
          <div>
            <label>Name</label>
            <input
              value={formValues.name}
              onChange={handleNameChange}
              placeholder="E.g. 'Tauqeer'"
            />
          </div>
          <div>
            <label>Contact</label>
            <input
              value={formValues.contact}
              onChange={handleContactChange}
              placeholder="E.g. '1234567890'"
            />
          </div>
        </div>
        <div className="dialog-actions">
          <button onClick={closeForm}>Cancel</button>
          <button
            onClick={() => handleCreateORUpdateClick(contactIdToEdit as number)}
          >
            {isCreatingNewContact ? "Create" : "Update"}
          </button>
        </div>
      </Dialog>
      <main>
        <TableHeader />
        {addressesContext.addresses.map((contact) => (
          <TableItem
            key={contact.id}
            name={contact.name}
            contact={contact.contact}
            handleEditClick={() => handleEditClick(contact.id)}
            handleDeleteClick={() => {}}
          />
        ))}
      </main>
    </div>
  );
};

export default HomeScreen;
