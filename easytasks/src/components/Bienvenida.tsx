/* eslint-disable @next/next/no-img-element */
import React from "react";

const Bienvenida = () => {
  return (
    <div>
      <section className="flex flex-col items-center text-center -mt-18 md:mt-46">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-8">
          <div className="text-left md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 text-white">
              ¡Descubre la forma mas colaborativa de gestionar tus tareas!
            </h1>
            <p className="text-lg mb-4 text-white">
              Transforma tu manera de trabajar proirizando tu bienestar y
              mejorando la eficiencia.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="/gatosColaboradores 2.svg"
              alt="Gatitos"
              className="max-w-full"
            />
          </div>
        </div>
        <div className="mt-2">
          <button className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-8 rounded">
            REGISTRARSE
          </button>
        </div>
      </section>
    </div>
  );
};

export default Bienvenida;
