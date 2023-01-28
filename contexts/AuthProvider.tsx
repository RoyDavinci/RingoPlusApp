import React, {createContext, useState} from 'react';

interface AuthInterface {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AuthContext = createContext<AuthInterface>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const AuthProvider = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      AuthProvider
    </AuthContext.Provider>
  );
};
