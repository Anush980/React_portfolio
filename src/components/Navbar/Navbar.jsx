import "./Navbar.css";

function Navbar() {
    return (
        <>
            <header>
                <div className="logo">
                    < a href="#home"><span>Anush.</span></a>
                </div>
                <div className="right">
                    <ul>
                        <a href="#Home"> <li>Home</li></a>
                        <a href="#About"> <li>About</li></a>
                        <a href="#Education"> <li>Education</li></a>
                        <a href="#Skills"> <li>Skills</li></a>
                        <a href="#Contact"> <li>Contact</li></a>
                    </ul>
                </div>
            </header>
        </>
    );
}
export default Navbar;