import Main from "../../components/main/Main";
 import Travels from "../../components/travels/Travels";
import Copyright from "../../components/copyright/Copyright";
 import About from "../../components/about/About";
import Homedesc from "../../components/homedesc/Homedesc";
import Opinion from "../../components/opinion/Opinion";
import SocialIcon from "../../components/socialIcon/SocialIcon";
import "./home.css";

function HomeArabic() {
   
    return (
      <div>
        <SocialIcon/>
      <Main/>
       <About/>
       <Travels/>
       <Opinion/>
       <Homedesc/>
       <Copyright/>
     </div>
     
      
    );
  }
  
  export default HomeArabic;