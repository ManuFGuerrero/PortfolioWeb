import React from "react";
import GlassIcon from './Extra/GlassIcon';
import RotatingText from './Extra/RotatingText';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Contact = () => {
    const items = [
        { icon: <LinkedInIcon />, color: 'blue', label: 'LinkedIn', link: "https://www.linkedin.com/in/manuel-florian-guerrero/" },
        { icon: <GitHubIcon />, color: 'gray', label: 'GitHub', link: "https://github.com/ManuFGuerrero" },
        { icon: <ContactMailIcon />, color: 'red', label: 'Email', link: "mailto:manuguerrero02@gmail.com" },
    ];

    return (
        <div className="relative bg-neutral-900 text-white px-6 py-8  flex flex-col items-center justify-center ">



            <div className=" max-w-10xl border border-neutral-800 bg-neutral-800/80 rounded-2xl p-6 shadow-xl">
                <RotatingText
                    texts={[
                        'Gracias por visitar la página',
                        'Thanks for visiting the page',
                        'Obrigado por visitar a página',
                    ]}
                    mainClassName="text-5xl text-[#FFFFF] sm:text-7xl md:text-7xl font-semibold text-center "
                    staggerFrom="first"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    staggerDuration={0.04}
                    rotationInterval={2500}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    splitBy="words"
                    elementLevelClassName="mx-1"
                />
            </div>
            <div className="mt-2">
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#FFC300] mb-2">
                    Contacto
                </h2>

                    <div className="flex flex-row flex-nowrap  justify-center gap-4 scale-75 sm:scale-100 mt-2">
                        <GlassIcon items={items} className="custom-class" />
                    </div>

            </div>

        </div>

    );
};

export default Contact;
