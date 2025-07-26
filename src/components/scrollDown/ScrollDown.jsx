
import './ScrollDown.css';
import { Link } from "react-scroll";
import { FiChevronDown } from "react-icons/fi";

const ScrollDown = ({ location }) => {
    return (
        <div className="scroll-down-container">
            <Link to={location} smooth={true} duration={500} offset={-70}>
                <FiChevronDown className="scroll-dot" />
            </Link>
        </div>
    )
}

export default ScrollDown;