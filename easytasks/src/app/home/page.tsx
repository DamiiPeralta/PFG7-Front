"use client";
import { useAuth } from "@/contextLogin/AuthContext";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Home = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-color5 via-grey to-white pt-96 sm:pt-0">
        <h1 className="text-2xl font-bold my-10 py-4">¿Qué quieres hacer?</h1>
        <div className="flex flex-col sm:flex-row">
          <a
            href="/my-teams"
            className="flex flex-col items-center my-4 sm:mx-10 transition-transform duration-300 transform hover:scale-125"
          >
            <Image
              src="/homeImg/miEquipoHome.svg"
              alt="icon"
              width={150}
              height={150}
            />
            <h2 className="my-4 hover:underline">MIS EQUIPOS</h2>
          </a>
          <a
            href="/unirse"
            className="flex flex-col items-center my-4 sm:mx-10 transition-transform duration-300 transform hover:scale-125"
          >
            <Image
              src="/homeImg/unirseEquipoHome.svg"
              alt="icon"
              width={150}
              height={150}
            />
            <h2 className="my-4 hover:underline">UNIRSE A UN EQUIPO</h2>
          </a>
          <a
            href="/crear-equipo"
            className="flex flex-col items-center my-4 sm:mx-10 transition-transform duration-300 transform hover:scale-125"
          >
            <Image
              src="/homeImg/crearEquipoHome.svg"
              alt="icon"
              width={150}
              height={150}
            />
            <h2 className="my-4 hover:underline">CREAR UN EQUIPO</h2>
          </a>
        </div>
      </section>
    </>
  );
};
export default Home;
