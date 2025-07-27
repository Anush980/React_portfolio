import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header>
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
                    duration={400}
                    offset={-70}
                    activeClass="active"
                    spy={true}
                    onClick={closeMenu}
                >
                    <span>Anush.</span>
                </Link>
            </div>

            <nav className={`right ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <Link
                            to="home"
                            smooth={true}
                            duration={400}
                            offset={-70}
                            activeClass="active"
                            spy={true}
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            smooth={true}
                            duration={400}
                            offset={-70}
                            activeClass="active"
                            spy={true}
                            onClick={closeMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="education"
                            smooth={true}
                            duration={400}
                            offset={-70}
                            activeClass="active"
                            spy={true}
                            onClick={closeMenu}
                        >
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="skills"
                            smooth={true}
                            duration={400}
                            offset={-70}
                            activeClass="active"
                            spy={true}
                            onClick={closeMenu}
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={400}
                            offset={-70}
                            activeClass="active"
                            spy={true}
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
