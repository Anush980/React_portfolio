
import Title from '../../components/Title/Title'
import ProfileCircle from '../../components/ProfileCircle/ProfileCircle'
import TypeWriter from '../../components/AnimatedText/TypeWriter'
import AboutData from '../../components/AboutData/AboutData'
import Button from '../../components/Button/button'
import './About.css';
import Navbar from '../../components/Navbar/Navbar'

const About = () => {
    return (
        <section id="about">
            <div className="about">
                <Title first='About' label='Me' />


                <div className="container">
                    <div class="left">
                        <ProfileCircle height='20rem' width='20rem' />
                    </div>
                    <div className="right">

                        <div className="aboutme">
                            <TypeWriter label='NOOB PROGRAMMER' />
                            <AboutData />
                        </div>
                        <div className="buttonBox">
                            <Button label='Read more' varient='primary' />

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About