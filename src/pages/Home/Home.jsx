import "./Home.css";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import Button from "../../components/Button/Button";
import { cvDownload } from "../../utils/cv";
import ProfileCircle from "../../components/ProfileCircle/ProfileCircle";
import TypeWriter from "../../components/AnimatedText/TypeWriter";
import HomeData from "../../components/HomeData/HomeData";
import ScrollDown from "../../components/scrollDown/ScrollDown";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="hero-content">
        <div className="text-content">
          <h1>
            Hi, I'm <span>Anush Shrestha</span>
          </h1>
          <TypeWriter label="NOOB PROGRAMMER" />
          <HomeData />
          <div className="home-button-container">
            <Button
              varient="primary"
              onClick={cvDownload}
            >Download CV</Button>
          </div>
        <SocialLinks 
  align="center" 
  direction="row" 
  variant="home"
/>
        </div><div className="profileCircle-container">
 <ProfileCircle width='20rem' height='20rem' />
        </div>
       
      </div>
      <div className="scroll">
  <ScrollDown location="about"/>
      </div>
    
    </section>
  );
}

export default Home;