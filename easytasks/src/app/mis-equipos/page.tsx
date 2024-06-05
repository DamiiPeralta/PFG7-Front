"use client";
import React from "react";

const MisEquiposPage = () => {
  return (
    <div className="">
      <div className="max-w-8xl mx-auto mt-20">
        <div className="bg-[#B4B3EA] p-3 rounded-md">
          <h2 className="text-3xl font-bold text-left mb-10 text-black">
            Mis Equipos
          </h2>
        </div>
        <div className="flex flex-wrap justify-between mt-4">
          <div className="w-full lg:w-1/2 p-2">
            <div className="bg-[#EDEDED] p-6 rounded-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-500">
                ERES LIDER
              </h3>
              <div className="mb-4 p-4 bg-[#329FA6] text-white rounded-md">
                <h4 className="font-bold">Nombre de equipo</h4>
                <p>Fecha de finalizacion</p>
              </div>
              <div className="mb-12 p-4 bg-white text-black rounded-md">
                <h4 className="font-bold">Nombre de equipo</h4>
                <p>Fecha de finalizacion</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-2">
            <div className="bg-[#EDEDED] p-5 rounded-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-500">
                ERES COLABORADOR
              </h3>
              <div className="mb-4 p-4 bg-white text-black rounded-md">
                <h4 className="font-bold">Nombre de equipo</h4>
                <p>Fecha de finalizacion</p>
              </div>
              <div className="mb-4 p-4 bg-white text-black rounded-md">
                <h4 className="font-bold">Nombre de equipo</h4>
                <p>Fecha de finalizacion</p>
              </div>
              <div className="mb-4 p-4 bg-white text-black rounded-md">
                <h4 className="font-bold">Nombre de equipo</h4>
                <p>Fecha de finalizacion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MisEquiposPage;
