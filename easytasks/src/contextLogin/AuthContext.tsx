"use client";
import { useSession } from "next-auth/react";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);

  //data user google
  // const { data: session } = useSession();
  // localStorage.setItem("userSession", JSON.stringify({ userData: session }));

  const validateUserSession = () => {
    const userSession = localStorage.getItem("userSession");
    if (userSession) {
      return true;
    } else {
      return null;
    }
  };

  const logout = () => {
    localStorage.removeItem("userSession");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, logout, validateUserSession }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
