/* eslint-disable @next/next/no-img-element */
import React from "react";

const Bienvenida = () => {
  return (
    <div>
      <section className="flex flex-col items-center text-center -mt-96">
        <h1 className="text-4xl font-bold mb-4">
          ¡Descubre la forma mas colaborativa de gestionar tus tareas!
        </h1>
        <p className="text-lg mb-4">
          Transforma tu manera de trabajar proirizando tu bienestar y mejorando
          la eficiencia.
        </p>
        <div className="flex justify-center">
          <img
            src="/gatosColaboradores 2.svg"
            alt="Gatitos"
            className="max-w-lg"
          />
        </div>
        <button className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-8 rounded mb-8">
          REGISTRARSE
        </button>
      </section>
    </div>
  );
};

export default Bienvenida;
