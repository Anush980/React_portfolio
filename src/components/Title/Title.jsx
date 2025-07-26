import React from 'react'
import './Title.css';

const Title = ({ first,label }) => {
    return (
        <div className="title-wrapper">
            <h2>{first} <span>{label}</span></h2>
        </div>


    );
};

export default Title;