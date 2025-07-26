import React from "react";
import "./TypeWriter.css";

const TypeWriter = ({ label }) => {
    return (
        <div className="typewriter">
            <h3>{label}</h3>
        </div>
    );
};

export default TypeWriter;
