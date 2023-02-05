import "./about.scss";
import Navbar from "../../components/supNavbar/Navbarsub";
import Copyright from "../../components/copyright/Copyright";
import AboutB from "../../components/aboutB/About";
import SocialIcon from "../../components/socialIcon/SocialIcon";

function About() {
    return (
      <div>
      <SocialIcon/>
       <Navbar/>
      
       <div className="travelMain">
        <h3 className="title">About Us</h3>
       </div>
        <AboutB/>
       <Copyright/>
      </div>
     
    );
  }
  
  export default About;