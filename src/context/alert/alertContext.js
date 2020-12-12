import { createContext, useContext } from 'react';

export const AlertContext = createContext();
export const useAlertContext = () => {
  return useContext(AlertContext);
};
