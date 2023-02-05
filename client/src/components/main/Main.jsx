import "./main.scss";
import Intro from "../../components/intro/Intro";
import Navbar from "../../components/navbar/Navbar";

function Main() {
  
    return (
      <div className="main">
         <Navbar/>
         <Intro/>
      </div>
    );
  }
  
  export default Main;