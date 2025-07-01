import React from "react";
import DecryptedText from './Extra/DecryptedText';
import Balatro from './Extra/Balatro';
import perfil from "../assets/perfil.jpg";
import { FaDownload } from "react-icons/fa";
const Home = () => {

  const handleDownloadCV = () => {

    const link = document.createElement("a");
    link.href = "/CviManuelGuerrero.pdf";
    link.download = "CV-ManuelGuerrero.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="relative w-full min-h-[150vh] overflow-hidden ">

      {/* Fondo animado */}
      <Balatro isRotate={false} mouseInteraction={true} pixelFilter={700} />

      {/* Contenido sobre el fondo */}
      <div className="absolute inset-0 min-h-screen bg-neutral-900/70 text-white px-6 py-32 sm:py-56 flex flex-col gap-10 items-center justify-start z-10 ">

        {/* Título de bienvenida */}
        <h1 className="text-5xl sm:text-7xl font-bold text-center text-[#FFC300] drop-shadow-lg">
          <DecryptedText
            text="¡Bienvenido a mí Portfolio Web!"
            speed={80}
            maxIterations={20}
            characters="ABCD1234!?"
            className="text-5xl sm:text-7xl font-bold text-center text-[#FFC300] drop-shadow-lg"
            parentClassName=""
            encryptedClassName="text-gray-400"
          />
        </h1>

        {/* Contenido principal */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">

          {/* Foto */}
          <div className="group relative transition-all duration-500">
            <div className="rounded-full overflow-hidden border-4 border-[#c0392b] shadow-xl shadow-red-900 w-52 h-52 sm:w-64 sm:h-64 group-hover:scale-105 transition-transform duration-300">
              <img
                src={perfil}
                alt="Foto de perfil"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Botón CV */}
            <div className="mt-5 flex justify-center">
              <button
                className="flex items-center gap-2 bg-[#FFC300] hover:bg-white-400 text-black font-semibold py-2 px-5 rounded-full shadow-md transition-transform transform hover:scale-110 duration-300"
                onClick={() => { handleDownloadCV(); }}
              >
                <FaDownload /> Descargar CV
              </button>
            </div>
          </div>

          {/* Info: nombre, puesto y frase */}
          <div className="text-center md:text-left max-w-md px-12 py-18 border border-red-600  bg-neutral-800/80 rounded-2xl p-6 shadow-xl hover:scale-105 hover:shadow-red-800 transition-transform duration-300">
            <h2 className="text-6xl font-bold text-[#FFFFF] mb-2">Manuel Florian Guerrero</h2>
            <p className="text-2xl font-medium text-gray-300 mb-4">Backend/Full Stack Developer</p>
            <p className="text-gray-400 italic">“Acérquense a ver la mano ganadora. Apuesto al código limpio, proyectos escalables y soluciones únicas.”</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
