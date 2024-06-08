"use client";

import React from "react";

const UneteAUnEquipoPage = () => {
  return (
    <div className="">
      <div className="bg-[#B4B3EA] py-12">
        <h2 className="text-2xl font-bold text-left text-black ml-3 mt-14">
          ¡Únete a un equipo!
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow py-10">
        <h3 className="text-xl font-semibold mb-4">
          Ingresa el código de invitación
        </h3>
        <input
          type="text"
          placeholder="Código del equipo"
          className="w-full max-w-md p-3 mb-4 border border-gray-300 rounded-md"
        />
        <button className="bg-[#329FA6] hover:bg-[#267d84] text-white font-bold py-3 px-12 rounded-lg">
          UNIRSE
        </button>
      </div>
    </div>
  );
};

export default UneteAUnEquipoPage;
