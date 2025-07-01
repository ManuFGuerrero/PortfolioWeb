import React from "react";
import { proyectos } from "../data/projects";
import SpotlightCard from './Extra/SpotlightCard';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';

const Projects = () => {
    return (
        <section className="relative bg-[#641e16] text-white px-6 py-16 min-h-[80vh] flex flex-col items-center justify-center gap-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-[#FFC300] drop-shadow-md">
                Mis Proyectos
            </h2>

            <SpotlightCard
                className="w-full max-w-7xl"
                spotlightColor="rgba(192, 57, 43, 0.2)" // #c0392b con opacidad
            >
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {proyectos.map((proj, i) => (
                        <div
                            key={i}
                            className="bg-[#cb4335] rounded-2xl shadow-lg p-6 transition-transform hover:-translate-y-1 hover:shadow-[0_0_25px_#FFC300]"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-[#DAF7A6]">
                                {proj.titulo}
                            </h3>
                            <p className="text-sm text-neutral-100">{proj.descripcion}</p>
                            <p className="text-xs text-[#DAF7A6] mt-2">
                                Tecnologías: {proj.tecnologias}
                            </p>
                            <p className="text-xs mt-1 text-[#FFC300] font-medium">
                                {proj.isIndividual ? <PersonIcon /> : <GroupsIcon />}

                            </p>
                            <a
                                href={proj.enlace}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-[#FFC300] hover:text-black transition"
                            >
                                Ver Proyecto →
                            </a>

                        </div>
                    ))}
                </div>
            </SpotlightCard>
        </section>
    );
};

export default Projects;
