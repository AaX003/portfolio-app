import { useEffect } from "react";

import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

import "../css/Main.css";

import { FaBars } from "react-icons/fa";

function Main() {
   useEffect(() => {
        const handleClickOutside = (e) => {
            const links = document.getElementById("nav-links");
             const menuBtn = document.getElementById("menu-btn");

            if (
                links.style.display === "block" &&
                !links.contains(e.target) &&
                !menuBtn.contains(e.target)
            ) {
                links.style.display = "none";
                menuBtn.style.display = "block";
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const toggleMenu = () => {
        const links = document.getElementById("nav-links");

        const isVisible = links.style.display === "block";
        links.style.display = isVisible ? "none" : "block";
        
    };

   
  return (
    
    <div className="main-container">
      
      <div className="bg"></div>
      <div className="header-container">
        <header className="portfolio-header">
          <h3 className="header">
            {"AaXanah Hill\nSoftware Engineer"}
          </h3>
           <button
            id="menu-btn"
            className="hamburger-menu-btn"
            onClick={toggleMenu}
            style={{ display: 'block' }}
            >
              <FaBars />
          </button>
          <div id="nav-links" style={{ display: "none" }}>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </header>
        <main id="components">
          <section id="hero"><Hero /></section>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </main>
      </div>
    </div>
  );
}
export default Main