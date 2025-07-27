import React from 'react';
import './Title.css';

const Title = ({ first, label }) => {
  return (
    <div className="title-wrapper">
      <h2 className="title-heading">{first} <span className="title-highlight">{label}</span></h2>
    </div>
  );
};

export default Title;