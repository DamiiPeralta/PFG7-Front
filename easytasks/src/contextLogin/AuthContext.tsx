"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  user: any;
  setUser: (user: any) => void;
  logout: () => void;
}

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const pardedUser = JSON.parse(storedUser);
        setUser(pardedUser);
      } catch (error) {
        console.error("Error parsing stored user data", error);
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
