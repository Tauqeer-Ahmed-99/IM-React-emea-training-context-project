import React, { useState } from "react";
import AddressContext, { Address, Context } from "./AddressContext";

const AddressProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [addresses, setAddresses] = useState<Address[]>([]);

  const createAddress = (name: string, contact: number) => {
    const newAddress: Address = {
      id: Math.random(),
      name,
      contact,
    };
    setAddresses((prevAddresses) => [...prevAddresses, newAddress]);
  };

  const updateAddress = (
    id: number,
    updatedName: string,
    updatedContact: number
  ) => {
    const copiedAddresses = [...addresses];
    const index = copiedAddresses.findIndex((address) => address.id === id);
    const updatedAddress: Address = {
      id,
      name: updatedName,
      contact: updatedContact,
    };
    copiedAddresses.splice(index, 1, updatedAddress);
    setAddresses(copiedAddresses);
  };

  const deleteAddress = (id: number) => {
    setAddresses((prevAddresses) =>
      prevAddresses.filter((address) => address.id !== id)
    );
  };

  const updatedContext: Context = {
    addresses,
    createAddress,
    updateAddress,
    deleteAddress,
  };

  return (
    <AddressContext.Provider value={updatedContext}>
      {children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;
