import { Link } from 'react-scroll';
import "./Navbar.css";

function Navbar() {
    return (
        <header>
            <div className="logo">
                <Link to="home" smooth={true} duration={500}>
                    <span>Anush.</span>
                </Link>
            </div>
            <div className="right">
                <ul>
                    <li><Link to="home" smooth={true} duration={500} offset={-70}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500} offset={-70}>About</Link></li>
                    <li><Link to="education" smooth={true} duration={500} offset={-70}>Education</Link></li>
                    <li><Link to="skills" smooth={true} duration={500} offset={-70}>Skills</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} offset={-70}>Contact</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
