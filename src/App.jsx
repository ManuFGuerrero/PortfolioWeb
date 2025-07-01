import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth">
        <section id="inicio">
          <Home />
        </section>

        <section id="sobre-mi">
          <About />
        </section>
        
        <section id="tecnologias">
          <Technologies />
        </section>

        <section id="mis-proyectos">
          <Projects />
        </section>


        <section id="contacto">
          <Contact />
        </section>

        <section id="contacto">
          <Footer />
        </section>
      </main>
    </>
  );
};

export default App;
