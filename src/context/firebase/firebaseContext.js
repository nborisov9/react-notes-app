import { createContext, useContext } from 'react';

export const FirebaseContext = createContext();
export const useFirebaseContext = () => {
  return useContext(FirebaseContext);
};
