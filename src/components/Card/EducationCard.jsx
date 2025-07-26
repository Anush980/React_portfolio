import React from 'react'
import cardData from '../../data/educationData'
import './Card.css';

const EducationCard = () => {
    return (
        <div className="card-container">
            {cardData.map((card, index) => (
                <div className="card" key={index}>
                    <h3>{card.title}</h3>
                    <p>University: {card.university}</p>
                    <p>Year: {card.year}</p>
                </div>
            ))}
        </div>


    )
}

export default EducationCard;