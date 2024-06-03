"use client";
import { AuthProvider } from "@/contextLogin/AuthContext";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default ClientWrapper;
