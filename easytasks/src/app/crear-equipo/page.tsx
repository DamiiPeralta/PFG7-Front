//"use client";
// import React, { useState, useEffect } from "react";
// import { useAuth } from "@/contextLogin/AuthContext";
// import { getUserIdFromToken } from "@/utils/jwtUtils";

// const CrearEquipoPage = () => {
//   const { userIdFromToken } = useAuth() || {};
//   const [userId, setUserId] = useState<string | null>(null);

//   useEffect(() => {
//     const id = getUserIdFromToken();
//     setUserId(id);
//   }, []);

//   useEffect(() => {
//     console.log("UserId:", userId);
//   }, [userId]);

//   const [teamName, setTeamName] = useState("");
//   const [description, setDescription] = useState("");
//   const [leaderName, setLeaderName] = useState("");
//   const [collaborators, setCollaborators] = useState([""]);
//   const [createdDate, setCreatedDate] = useState("");
//   const [finishDate, setFinishDate] = useState("");

//   useEffect(() => {
//     setCreatedDate(new Date().toISOString());
//   }, []);

//   // const handleCollaboratorChange = (index: number, value: string) => {
//     // const newCollaborators = [...collaborators];
//     // newCollaborators[index] = value;
//     // setCollaborators(newCollaborators);
//   // };

//   // const handleAddCollaborator = () => {
//     // setCollaborators([...collaborators, ""]);
//   // };

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     if (!userId) {
//       alert("User ID is not available");
//       return;
//     }
//     const teamData = {
//       team_name: teamName,
//       description,
//       created_date: createdDate,
//       finish_date: finishDate,
//       leader: leaderName,
//       collaborators,
//     };

//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/teams/${userId}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(teamData),
//         }
//       );

//       if (response.ok) {
//         alert("Equipo creado con éxito");
//       } else {
//         alert("Error al crear el equipo");
//       }
//     } catch (error) {
//       console.error("Error al crear el equipo:", error);
//     }
//   };

//   return (
//     <div className="">
//       <div className="bg-[#B4B3EA] py-10">
//         <h2 className="text-2xl font-bold text-left text-black ml-6 mt-14">
//           ¡Crea un equipo!
//         </h2>
//       </div>

//       <div className="flex flex-col items-center justify-center flex-grow py-10">
//         <div className="bg-white border border-gray-300 rounded-lg shadow-md p-10 w-full max-w-6xl">
//           <form onSubmit={handleSubmit}>
//             <div className="flex justify-between mb-6">
//               <div>
//                 <label
//                   htmlFor="teamName"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Nombre de equipo/proyecto
//                 </label>
//                 <input
//                   id="teamName"
//                   type="text"
//                   value={teamName}
//                   onChange={(e) => setTeamName(e.target.value)}
//                   className="mt-1 block w-full p-2 border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="text-right">
//                 <p>
//                   CREACION:{" "}
//                   {createdDate ? new Date(createdDate).toLocaleString() : ""}
//                 </p>
//                 <label
//                   htmlFor="finishDate"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   FINALIZACION
//                 </label>
//                 <input
//                   id="finishDate"
//                   type="datetime-local"
//                   value={finishDate}
//                   onChange={(e) => setFinishDate(e.target.value)}
//                   className="mt-1 block w-full p-2 border-gray-300 rounded-md"
//                 />
//               </div>
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="description"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 DESCRIPCION:
//               </label>
//               <textarea
//                 id="description"
//                 placeholder="Descripción del proyecto"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 className="w-1/2 p-2 border border-gray-300 rounded-md mt-1 bg-notebook-lines resize-none"
//                 rows={4}
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="leaderName"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Nombre del Lider
//               </label>
//               <input
//                 id="leaderName"
//                 type="text"
//                 value={leaderName}
//                 onChange={(e) => setLeaderName(e.target.value)}
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               />
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold mb-4">MIEMBROS:</h4>
//               <div className="flex items-center space-x-8">
//                 <div className="flex flex-col items-center">
//                   <div className="bg-[#329FA6] w-24 h-24 rounded-full flex items-center justify-center text-white font-semibold">
//                     <span>Lider</span>
//                   </div>
//                   <span className="mt-2">{leaderName}</span>
//                 </div>
//                 {collaborators.map((collaborator, index) => (
//                   <div key={index} className="flex flex-col items-center">
//                     <div className="bg-gray-300 w-24 h-24 rounded-full flex items-center justify-center text-gray-600 text-4xl">
//                       <span>{index + 1}</span>
//                     </div>
//                     <input
//                       type="text"
//                       value={collaborator}
//                       onChange={(e) =>
//                         handleCollaboratorChange(index, e.target.value)
//                       }
//                       placeholder="Nombre del colaborador"
//                       className="mt-2 block w-full p-2 border border-gray-300 rounded-md"
//                     />
//                   </div>
//                 ))}

//                 <div className="flex flex-col items-center">
//                   <button
//                     type="button"
//                     onClick={handleAddCollaborator}
//                     className="bg-gray-300 w-24 h-24 rounded-full flex items-center justify-center text-gray-600 text-4xl"
//                   >
//                     <span>+</span>
//                   </button>
//                   <span className="mt-2">Añadir</span>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-end mt-8">
//               <button
//                 type="submit"
//                 className="bg-[#329FA6] hover:bg-[#267d84] text-white font-bold py-3 px-6 rounded-lg"
//               >
//                 CREAR EQUIPO
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CrearEquipoPage;ibold">
"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/contextLogin/AuthContext";
import { getUserIdFromToken } from "@/utils/jwtUtils";

const CrearEquipoPage = () => {
  const { userIdFromToken } = useAuth() || {};
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const id = getUserIdFromToken();
    setUserId(id);
  }, []);

  useEffect(() => {
    console.log("UserId:", userId);
  }, [userId]);

  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [finishDate, setFinishDate] = useState("");

  useEffect(() => {
    setCreatedDate(new Date().toISOString());
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!userId) {
      alert("User ID is not available");
      return;
    }
    const teamData = {
      team_name: teamName,
      description,
      created_date: createdDate,
      finish_date: finishDate,
      leader: leaderName,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/teams/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(teamData),
        }
      );

      if (response.ok) {
        alert("Equipo creado con éxito");
      } else {
        alert("Error al crear el equipo");
      }
    } catch (error) {
      console.error("Error al crear el equipo:", error);
    }
  };

  return (
    <div className="">
      <div className="bg-[#B4B3EA] py-10">
        <h2 className="text-2xl font-bold text-left text-black ml-6 mt-14">
          ¡Crea un equipo!
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow py-10">
        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-10 w-full max-w-6xl">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <div className="bg-[#329FA6] w-24 h-24 rounded-full flex items-center justify-center text-white font-semibold">
                  <span>Lider</span>
                </div>
                <div className="ml-4">
                  <label
                    htmlFor="leaderName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombre del Líder
                  </label>
                  <input
                    id="leaderName"
                    type="text"
                    value={leaderName}
                    onChange={(e) => setLeaderName(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="teamName"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre de equipo/proyecto
              </label>
              <input
                id="teamName"
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="mt-1 block w-1/3 p-2 border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-between mb-6">
              <div className="text-left">
                <p>
                  CREACIÓN:{" "}
                  {createdDate ? new Date(createdDate).toLocaleString() : ""}
                </p>
              </div>
              <div className="text-right">
                <label
                  htmlFor="finishDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  FINALIZACIÓN
                </label>
                <input
                  id="finishDate"
                  type="datetime-local"
                  value={finishDate}
                  onChange={(e) => setFinishDate(e.target.value)}
                  className="mt-1 block w-full p-2 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                DESCRIPCIÓN:
              </label>
              <textarea
                id="description"
                placeholder="Descripción del proyecto"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md mt-1 resize-none bg-notebook-lines"
                rows={4}
              />
            </div>
            <div className="flex justify-end mt-8">
              <button
                type="submit"
                className="bg-[#329FA6] hover:bg-[#267d84] text-white font-bold py-3 px-6 rounded-lg"
              >
                CREAR EQUIPO
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CrearEquipoPage;
