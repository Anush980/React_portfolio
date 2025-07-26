import React from 'react'
import cardData from '../../data/cardData'
import './Card.css';

const SkillCard = () => {
    return (
        <div className="card-container">
            {cardData.map((card, index) => (
                <div className="card" key={index}>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                </div>
            ))}
        </div>


    )
}

export default SkillCard;