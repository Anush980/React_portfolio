import React from 'react'
import './Title.css';

const Title = ({ label }) => {
    return (
        <div className="title-wrapper">
            <h2>My <span>{label}</span></h2>
        </div>


    );
};

export default Title;