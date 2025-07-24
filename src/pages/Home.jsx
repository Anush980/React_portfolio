import "./Home.css";
import { images } from '../config/profile';
import Navbar from "../components/Navbar/Navbar";
import { document } from '../config/cv';
import SocialLinks from "../components/SocialLinks/SocialLinks";
import Button from "../components/Button/button";
import { cvDownload } from "../utils/cv";

function Home() {
  return (
    <>
    <Navbar/> 
     <div className="hero">
        <div className="left">
          <h1>
            Hi, I'm <span>Anush Shrestha</span>
          </h1>
          <div className="heroAnimate">
            <h3>NOOB Programmer</h3>
          </div>
          <p>
            Mostly passionate about programming, I have experience in HTML, CSS,
            and foundational knowledge of Java, C, and SQL queries. Hailing from
            Nepal, I thrive on exploring new challenges and creating impactful
            solutions through code.
          </p>
          <div className="buttonBox">
            <Button label='Download CV' varient="secondary" onClick={cvDownload}/>
          </div>
          
          <SocialLinks align="left" direction="row"/>
        </div>

        <div className="right">
          <div className="circle">
            <img src={images.profilePic} alt="Anush Shrestha" className="profilePic" />
          </div>
        </div>
      </div>
   
    </>
  );
}
export default Home;
