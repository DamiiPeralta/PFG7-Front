import Image from "next/image";
import React from "react";

const Bienvenida = () => {
  return (
    <div className="bg-gradient-lineal min-h-screen top-0 absolute w-full">
      <section className="flex flex-col items-center text-center md:mt-46 mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-8">
          <div className="text-left md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 text-white">
              ¡Descubre la forma mas colaborativa de gestionar tus tareas!
            </h1>
            <p className="text-xl mb-4 text-white">
              Transforma tu manera de trabajar priorizando tu bienestar y
              mejorando la eficiencia.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/sectionWelcome/gatosColaboradores.svg"
              width={600}
              height={600}
              alt="Gatos organizando sus tareas en una tableta"
              className="max-w-full"
            />
          </div>
        </div>
        <div className="mb-20 mt-2">
          <button className="bg-color-button hover:bg-teal-700 text-black font-bold py-2 px-8 rounded text-xl w-60">
            Registrarse
          </button>
        </div>
      </section>
    </div>
  );
};

export default Bienvenida;
