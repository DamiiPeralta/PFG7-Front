"use client";
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resetLink, setResetLink] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user && user.email === email) {
      const token = "fake-reset-token";
      localStorage.setItem("resetToken", JSON.stringify({ email, token }));
      setMessage(
        "Se ha enviado un enlace de restablecimiento de contraseña a tu correo."
      );
      setResetLink(`/reset-password?token=${token}`);
    } else {
      setMessage("El correo electrónico no está registrado.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 to-purple-500 p-5">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <img src="/logo.svg" alt="EasyTasks Logo" className="mx-auto mb-2" />
        <h2 className="text-2xl font-bold text-white">EasyTasks</h2>
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg"
          >
            Send Reset Link
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-green-600">{message}</p>
        )}
        {resetLink && (
          <div className="mt-4 text-center">
            <a href={resetLink} className="text-blue-500">
              Restablecer contraseña
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
