/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-b from-blue-dark via-blue-medium to-blue-light min-h-screen p-8">
      <header className="flex justify-between items-center mb-8">
        <div className="logo">
          <Link href="/Landing">
            <img src="/logo.svg" alt="logo" className="w-26 h-14" />
          </Link>
        </div>
        <nav className="flex space-x-8">
          <a
            href="/Comenzar"
            className="hover:text-gray-200 transition duration-300"
          >
            Comenzar
          </a>
          <a
            href="/Nosotros"
            className="hover:text-gray-200 transition duration-300"
          >
            Nosotros
          </a>
          <a
            href="/Donate"
            className="hover:text-gray-200 transition duration-300"
          >
            Donaciones
          </a>
        </nav>
        <button className="bg-white hover:bg-blue-light text-black font-bold py-2 px-4 rounded ml-4">
          INICIAR SESION
        </button>
      </header>
    </div>
  );
};

export default Navbar;
