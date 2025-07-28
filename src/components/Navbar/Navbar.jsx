import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    // Enhanced scroll detection
    useEffect(() => {
        const handleScroll = () => {
            // Add shadow when scrolled
            setScrolled(window.scrollY > 50);
            
            // Calculate active section
            const scrollPosition = window.scrollY + 100;
            const sections = [
                { id: "home", offset: document.getElementById("home")?.offsetTop || 0 },
                { id: "about", offset: document.getElementById("about")?.offsetTop || 0 },
                { id: "education", offset: document.getElementById("education")?.offsetTop || 0 },
                { id: "skills", offset: document.getElementById("skills")?.offsetTop || 0 },
                { id: "contact", offset: document.getElementById("contact")?.offsetTop || 0 }
            ];
            
            // Find which section is currently in view
            let current = "home";
            for (let i = sections.length - 1; i >= 0; i--) {
                if (scrollPosition >= sections[i].offset) {
                    current = sections[i].id;
                    break;
                }
            }
            
            setActiveSection(current);
        };

    
        handleScroll();
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
            {/* Hamburger Menu */}
            <div
                className={`hamburger ${menuOpen ? "open" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>

         
            <div className="logo">
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    onClick={closeMenu}
                    className={activeSection === "home" ? "active" : ""}
                >
                    <span>Anush.</span>
                </Link>
            </div>

            {/* Navigation */}
            <nav className={`right ${menuOpen ? "open" : ""}`}>
                <ul>
                    {[
                        { id: "home", name: "Home", offset: -80 },
                        { id: "about", name: "About", offset: -80 },
                        { id: "education", name: "Education", offset: -80 },
                        { id: "skills", name: "Skills", offset: -80 },
                        { id: "contact", name: "Contact", offset: -80 }
                    ].map((item) => (
                        <li key={item.id}>
                            <Link
                                to={item.id}
                                smooth={true}
                                duration={500}
                                offset={item.offset}
                                spy={true}
                                onClick={closeMenu}
                                className={activeSection === item.id ? "active" : ""}
                                activeClass="active"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;