"use client";

import React from "react";

const CrearEquipoPage = () => {
  return (
    <div className="">
      <div className="bg-[#B4B3EA] py-10">
        <h2 className="text-2xl font-bold text-left text-black ml-6 mt-14">
          ¡Crea un equipo!
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow py-10">
        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-10 w-full max-w-6xl">
          <div className="flex justify-between mb-6">
            <h3 className="text-xl font-semibold">Nombre de equipo/proyecto</h3>
            <div className="text-right">
              <p>CREACIÓN (día-hora)</p>
              <p>FINALIZACIÓN (día-hora)</p>
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              DESCRIPCIÓN:
            </label>
            <textarea
              id="description"
              placeholder="Descripción del proyecto"
              className="w-1/2 p-2 border border-gray-300 rounded-md mt-1 bg-notebook-lines resize-none"
              rows={4}
            />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">MIEMBROS:</h4>
            <div className="flex items-center space-x-8">
              <div className="flex flex-col items-center">
                <div className="bg-[#329FA6] w-24 h-24 rounded-full flex items-center justify-center text-white font-semibold">
                  <span>Líder</span>
                </div>
                <span className="mt-2">Nombre</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-300 w-24 h-24 rounded-full flex items-center justify-center text-gray-600 text-4xl">
                  <span>+</span>
                </div>
                <span className="mt-2">Colaboradores</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearEquipoPage;
