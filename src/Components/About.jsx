import AnimatedContent from './Extra/AnimatedContent';

const About = () => {
  return (
    <section className="relative bg-[#641e16] text-white px-6 py-16  flex flex-col items-center justify-center gap-12">


      <AnimatedContent
        distance={100}
        direction="horizontal"
        reverse={false}
        duration={2.0}
        ease="bounce.out"
        initialOpacity={0}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-[#FFC300] drop-shadow-md">
          Sobre Mí
        </h2>
        <div className="max-w-3xl bg-[#cb4335] border border-[#FFC300] rounded-2xl shadow-lg p-8 text-lg text-neutral-100 hover:shadow-[0_0_25px_#FFC300] transition-shadow duration-300 leading-relaxed">
          <p>
            Desarrollador Backend/Fullstack en formación con experiencia en desarrollo de aplicaciones web, servicio técnico y programación orientada a objetos. Estudiante avanzado de Licenciatura en Sistemas en la Universidad Nacional de Lanús (UNLa) con sólida base en Java, bases de datos relacionales y frameworks modernos. Con conocimientos en metodologías ágiles y calidad de software. Proactivo, autodidacta y en búsqueda constante de crecimiento profesional en el mundo IT.          </p>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default About;
