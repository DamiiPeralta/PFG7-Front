"use client";

import { useSession } from "next-auth/react";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  user: any;
  setUser: (user: any) => void;
  logout: () => void;
  validateUserSession: () => boolean | null;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: any) => {
  const { data: session } = useSession();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (session) {
      setUser(session.user);
      if (typeof window !== "undefined") {
        localStorage.setItem("userSession", JSON.stringify(session));
      }
    }
  }, [session]);

  const validateUserSession = () => {
    if (typeof window !== "undefined") {
      const userSession = localStorage.getItem("userSession");
      return userSession ? true : null;
    }
    return null;
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("userSession");
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, logout, validateUserSession }}
    >
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
