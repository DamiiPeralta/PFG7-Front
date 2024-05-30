import { GatoEstres, GatoProductivo, GatoSobrecarga } from "./img"

const MentalHealth = () => {
    return (
        <section className="flex flex-col justify-center items-center p-5 bg-gradient-to-b from-color1 via-color2 to-color3 h-sreen ">
            <h2 className="text-2xl font-bold mt-9 my-5">La importancia de una buena gestión de tareas</h2>
            <div className="flex flex-col justify-center items-center w-[80%] mb-4 text-xl">
                <p>En el entorno laboral actual, la salud mental de los empleados es una prioridad crucial.</p>
                <p>Aquí te presentamos estadísticas clave que demuestran cómo la sobrecarga laboral afecta la salud mental y cómo una gestión efectiva de tareas puede ser la solución.</p>
            </div>

            <div className="flex justify-center items-center w-[90%]">
                <div className="flex flex-col my-5">
                    <div className="flex flex-col my-2 overflow-hidden w-full transition-transform duration-300 transform hover:scale-125">
                       <GatoEstres/>
                    </div>
                    <div className="overflow-hidden w-full transition-transform duration-300 transform hover:scale-125">
                        <GatoSobrecarga />
                    </div>
                    <div className="overflow-hidden w-full transition-transform duration-300 transform hover:scale-125 mt-10 ">
                        <GatoProductivo />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center m-5">
                    <div className="flex flex-col items-center my-10 text-lg" >
                        <h3 className="font-semibold my-1">ESTRÉS LABORAL</h3>
                        <ul className="list-disc list-inside w-[95%]">
                            <li className="ml-4">"El 76% de los empleados experimentan estrés relacionado con el trabajo que afecta su salud física y mental." (Fuente: American Institute of Stress)</li>
                            <li className="ml-4">"El estrés laboral contribuye a un 40% de los casos de insomnio." (Fuente: National Sleep Foundation)</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center my-10 text-lg">
                        <h3 className="font-semibold my-1">SOBRECARGA DE TRABAJO</h3>
                        <ul className="list-disc list-inside w-[95%]">
                            <li className="ml-4">"El 60% de los empleados sienten que su carga de trabajo es demasiado pesada, lo que afecta su rendimiento y bienestar." (Fuente: Gallup)</li>
                            <li className="ml-4">"La sobrecarga laboral está asociada con un aumento del 50% en el riesgo de depresión y ansiedad." (Fuente: Occupational Health Psychology)</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center my-10 text-lg">
                        <h3 className="font-semibold my-1">PRODUCTIVIDAD Y BIENESTAR</h3>
                        <ul className="list-disc list-inside w-[95%]">
                            <li className="ml-4">"Empresas que priorizan la salud mental de sus empleados observan un aumento del 20% en la productividad." (Fuente: WHO)</li>
                            <li className="ml-4">"Equipos con una gestión de tareas eficaz reportan un 30% menos de ausentismo por motivos de salud mental." (Fuente: Harvard Business Review)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default MentalHealth;