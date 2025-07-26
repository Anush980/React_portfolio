import { Link } from 'react-scroll';
import "./Navbar.css";

function Navbar() {
    return (
        <header>
            <div className="logo">
                <Link to="home" smooth={true} duration={400} offset={-70} activeClass="active" spy={true}>
                    <span>Anush.</span>
                </Link>
            </div>
            <div className="right">
                <ul>
                    <li><Link to="home" smooth={true} duration={400} offset={-70} activeClass="active" spy={true}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={400} offset={-70} activeClass="active" spy={true}>About</Link></li>
                    <li><Link to="education" smooth={true} duration={400} offset={-70} activeClass="active" spy={true}>Education</Link></li>
                    <li><Link to="skills" smooth={true} duration={400} offset={-70} activeClass="active" spy={true}>Skills</Link></li>
                    <li><Link to="contact" smooth={true} duration={400} offset={-70} activeClass="active" spy={true}>Contact</Link></li>

                </ul>
            </div>
        </header>
    );
}

export default Navbar;
