import React from "react";
import './button.css';

const Button = ({ label, varient = 'primary', onClick }) => {
    return (
        <button className={`btn btn-${varient}`} onClick={onClick}>{label}</button>

    );
}
export default Button;