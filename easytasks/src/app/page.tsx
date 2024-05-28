import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-custom-gradient h-screen">
      <div className="flex justify-center">
        <div className="text-2xl w-1/2 mt-16 text-center">
          En EasyTasks, creemos que un equipo saludable es un equipo productivo.{" "}
          <br /> <br />
          Nuestra plataforma no solo te ayuda a organizar y gestionar tus
          tareas, sino que también se preocupa por tu bienestar. <br /> <br />{" "}
          Descubre cómo EasyTasks puede transformar tu jornada laboral.
        </div>
        <div className="flex flex-grow">
          <div className="w-4/6">
            <div>
              Mantén tus tareas ordenadas por prioridad en un solo lugar.
            </div>
            <div>imagen tareas</div>
          </div>
        </div>
      </div>
    </div>
  );
}
