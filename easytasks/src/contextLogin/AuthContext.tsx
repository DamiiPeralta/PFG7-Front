"use client";
import { JwtPayload } from "@/utils/types/interface-auth";
import { jwtDecode } from "jwt-decode";
import { useSession } from "next-auth/react";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);

  const userIdFromToken = () => {
    const userSession = localStorage.getItem("userSession");

    if (!userSession) {
      return null;
    }

    try {
      const token = JSON.parse(userSession).token.token;
      if (!token) {
        return null;
      }

      const decodedToken = jwtDecode<JwtPayload>(token);
      return decodedToken.id;
    } catch (error) {
      console.error("Failed to decode token", error);
      return null;
    }
  };

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
      value={{ user, setUser, logout, validateUserSession, userIdFromToken }}
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
