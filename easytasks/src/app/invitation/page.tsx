"use client";

import React from "react";

const InvitationPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#D1C4E9]">
      <div className="bg-[#eaeaec] text-center p-10 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-black mb-4">¡Invita!</h1>
        <p className="text-black mb-8">
          Envía este código a todos los integrantes de tu nuevo equipo
        </p>
        <label
          htmlFor="inviteCode"
          className="block text-lg font-medium text-black mb-2"
        >
          Código de invitación
        </label>
        <input
          id="inviteCode"
          type="text"
          className="w-full p-2 mb-6 border border-gray-300 rounded-md"
        />
        <button className="bg-[#329FA6] hover:bg-[#267d84] text-white font-bold py-2 px-6 rounded-lg">
          GENERAR CÓDIGO
        </button>
      </div>
    </div>
  );
};

export default InvitationPage;
