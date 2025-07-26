import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import './Skills.css';
import SkillCard from '../../components/Card/skillCard';
import Title from '../../components/Title/Title';
const Skills = () => {
    return (
        <section id="skills" className='skills'>
            <Title first="My" label="Skills"/>
                <SkillCard/>
        </section>
    );
}

export default Skills;