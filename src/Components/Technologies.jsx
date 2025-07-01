import React from "react";
import { backend, frontend, frameworks, herramientas, database } from "../data/technologies";

// Importá todos los íconos agrupados
import * as BackendIcons from "./Svg/Backend";
import * as FrontendIcons from "./Svg/Frontend";
import * as FrameworkIcons from "./Svg/Frameworks";
import * as DatabaseIcons from "./Svg/Database";
import * as HerramientasIcons from "./Svg/Herramientas";


const Technologies = () => {

  const renderGroup = (title, tech, IconComponents) => (
    <div className="mb-8  border border-red-600  bg-neutral-800/80 rounded-2xl p-6 shadow-xl hover:scale-105 hover:shadow-red-800 transition-transform duration-300">
      <h3 className="text-3xl text-center font-semibold text-[#FFFFFF] mb-4">{title}</h3>
      <div className="flex justify-evenly flex-wrap gap-4">
        {tech.map((tec, i) => {
          const Icon = IconComponents[tec.nombre];

          return (
            <div key={i} className="flex flex-col items-center gap-1 ">
              {Icon ? <Icon att="w-24 h-24  hover:animate-pulse transition ease-in-out duration-300" /> : <div>Missing icon</div>}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="bg-neutral-900 px-4 py-20 text-gray-900 flex flex-col items-center">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#FFC300] drop-shadow-md">
        Tecnologías
      </h2>

      {/* Grupo de 3 en fila */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {renderGroup("Backend", backend, BackendIcons)}
        {renderGroup("Frontend", frontend, FrontendIcons)}
        {renderGroup("Database", database, DatabaseIcons)}
      </div>

      {/* Grupo de 2 debajo */}
      <div className="flex flex-col items-center gap-8">
        {renderGroup("Frameworks", frameworks, FrameworkIcons)}
        {renderGroup("Herramientas", herramientas, HerramientasIcons)}
      </div>
    </div>
  );
};

export default Technologies;

