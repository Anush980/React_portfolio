import "./Home.css";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import Button from "../../components/Button/button";
import { cvDownload } from "../../utils/cv";
import ProfileCircle from "../../components/ProfileCircle/ProfileCircle";
import TypeWriter from "../../components/AnimatedText/TypeWriter";
import HomeData from "../../components/HomeData/HomeData";
import ScrollDown from "../../components/scrollDown/ScrollDown";

function Home() {
  return (
    <section id="home">
      <div className="hero">
        <div className="left">
          <h1>
            Hi, I'm <span>Anush Shrestha</span>
          </h1>
          <TypeWriter label="NOOB PROGRAMMER" />
          <HomeData />
          <div className="homeButton">
            <Button
              label="Download CV"
              varient="secondary"
              onClick={cvDownload}
            />
          </div>

          <SocialLinks align="left" direction="row" />
        </div>

        <div className="right">
          <ProfileCircle width="24rem" height="24rem" />
        </div>
      </div>
      <ScrollDown location="about"/>
    </section>
  );
}
export default Home;
