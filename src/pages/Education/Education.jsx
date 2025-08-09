import React from 'react'
import EducationCard from '../../components/Card/EducationCard';
import Title from '../../components/Title/Title';
import './Education.css';
import ScrollDown from '../../components/scrollDown/ScrollDown';

const Education = () => {
    return (
        <section id="education" className="education" >
            <Title first="My" label="Educations" />
            <EducationCard />
        </section>
    )
}

export default Education;


