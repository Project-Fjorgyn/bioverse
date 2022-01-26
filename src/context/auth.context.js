import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(false);

  const onLogin = () => {
    setUser(true);
  };

  const onLogout = () => {
    setUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, onLogin, onLogout }}>{children}</AuthContext.Provider>
  );
}
