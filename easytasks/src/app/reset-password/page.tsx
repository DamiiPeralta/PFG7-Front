"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Logo from "@/components/logo";

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const resetToken = JSON.parse(localStorage.getItem("resetToken") || "{}");
    if (resetToken && resetToken.token === token) {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      user.password = password;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.removeItem("resetToken");
      setMessage("Contraseña restablecida exitosamente.");
    } else {
      setMessage("Token inválido o expirado.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 to-purple-500 p-5">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <Logo />
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg"
          >
            Reset Password
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-green-600">{message}</p>
        )}
      </div>
    </div>
  );
};

const ResetPasswordPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ResetPassword />
  </Suspense>
);

export default ResetPasswordPage;
