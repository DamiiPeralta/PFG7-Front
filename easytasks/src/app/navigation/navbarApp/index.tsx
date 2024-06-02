import Link from "next/link";
import React from "react";

const NavbarApp = () => {
  const handleSelectChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    if (value) {
      window.location.href = value;
    }
  };
  return (
    <div className=" w-full h-30 bg-color7 fixed top-0 p-4 z-20">
      <div className="flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <img src="/logo.svg" alt="logo" className="w-26 h-14" />
          </Link>
        </div>
        <nav className="flex space-x-8">
          <a href="#" className="hover:text-gray-200 transition duration-300">Inicio</a>
          <a href="#" className="hover:text-gray-200 transition duration-300">Tablero</a>
          <select
            onChange={handleSelectChange}
            className="bg-color7 text-white hover:text-gray-200 transition duration-300"
          >
            <option value="" disabled selected>
              Equipos
            </option>
            <option value="#">Mis Equipos</option>
            <option value="#">Unirse</option>
            <option value="#">Crear</option>
            <option value="#">Información</option>
          </select>
        </nav>
        <button className="bg-white hover:bg-blue-light text-black font-bold py-2 px-4 rounded ml-4">
          CERRAR SESION
        </button>
      </div>
    </div>
  );
};

export default NavbarApp;
