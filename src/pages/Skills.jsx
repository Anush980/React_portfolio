import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import './Skills.css';
import SkillCard from '../components/SkillCard/skillCard';
import Title from '../components/Title/Title';
const Skills = () => {
    return (
        <>
            <Navbar />
            <Title label="Skills"/>
                <SkillCard/>
        </>
    );
}

export default Skills