
import Title from '../../components/Title/Title'
import ProfileCircle from '../../components/ProfileCircle/ProfileCircle'
import TypeWriter from '../../components/AnimatedText/TypeWriter'
import AboutData from '../../components/AboutData/AboutData'
import Button from '../../components/Button/Button'
import './About.css';

const About = () => {
    return (
        <section id="about">
            <div className="about">
                <Title first='About' label='Me' />


                <div className="container">
                    <div class="left">
                        <ProfileCircle height='20rem' width='20rem' />
                    </div>
                    
<div className="about-container">
                        <div className="aboutme">
                            <TypeWriter label='NOOB PROGRAMMER' />
                            <AboutData />
                        </div>
                        <div className="home-button-container">
                            <Button
                                varient="primary" 
                            >View Projects</Button>
                        
                    </div>
                    </div>
                </div>
            </div>
            
        </section>

    )
}

export default About