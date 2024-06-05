"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarApp = () => {
  const handleSelectChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    if (value) {
      window.location.href = value;
    }
  };
  return (
    <div className=" w-full h-30 bg-color5 fixed top-0 p-4 z-20">
      <div className="flex flex-row justify-between items-center">
        <Link href="/home" className="flex">
          <img src="/logo.svg" alt="logo" className="w-26 h-14" />
          <Image src="/EasyTasks.svg" alt="AppName" width={100} height={100} />
        </Link>
        <nav className="flex space-x-8">
          <a
            href="/home"
            className="hover:text-gray-200 transition duration-300"
          >
            Inicio
          </a>
          <a href="#" className="hover:text-gray-200 transition duration-300">
            Tablero
          </a>
          <select
            onChange={handleSelectChange}
            className="bg-color5 text-black hover:text-gray-200 transition duration-300"
          >
            <option value="" disabled selected>
              Equipos
            </option>
            <option value="/mis-equipos">Mis Equipos</option>
            <option value="/unirse">Unirse</option>
            <option value="/crear-equipo">Crear</option>
            <option value="#">Información</option>
          </select>
        </nav>
        <button className="bg-white hover:bg-color5 text-black hover:text-white font-bold py-2 px-4 rounded ml-4">
          CERRAR SESION
        </button>
      </div>
    </div>
  );
};

export default NavbarApp;
