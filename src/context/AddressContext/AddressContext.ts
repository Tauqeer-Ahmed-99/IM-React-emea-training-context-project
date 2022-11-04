import { createContext } from "react";

export interface Address {
  id: number;
  name: string;
  contact: number;
}

export interface Context {
  addresses: Address[];
  createAddress: (name: string, contact: number) => void;
  updateAddress: (
    id: number,
    updatedName: string,
    updatedContact: number
  ) => void;
  deleteAddress: (id: number) => void;
}

const initialContext: Context = {
  addresses: [],
  createAddress: (name: string, contact: number) => {},
  updateAddress: (
    id: number,
    updatedName: string,
    updatedContact: number
  ) => {},
  deleteAddress: (id: number) => {},
};

const AddressContext = createContext(initialContext);

export default AddressContext;
