import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer"

export default function App() {
  return (
    <div>
      <main className="text-gray  ">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
