import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';
import Chatbot from "./components/Chatbot";



function App() {
  return (
    <>
    <div>
      <div>
       
          <Navbar />
          <HeroSection />
          <About />
          <Projects />
          <Services />
          <Contact />
          <Footer />
        </div>
          <Chatbot/>
      </div>
    </>
  );
}

export default App;
