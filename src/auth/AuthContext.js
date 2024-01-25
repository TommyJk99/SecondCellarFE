import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const value = {
    isAuth,
    login: () => setIsAuth(true),
    logout: () => setIsAuth(false),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
