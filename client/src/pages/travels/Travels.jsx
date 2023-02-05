import "./travels.scss";
import Navbar from "../../components/supNavbar/Navbarsub";
import SocialIcon from "../../components/socialIcon/SocialIcon";
import Copyright from "../../components/copyright/Copyright";
import { Link } from "react-router-dom";

function Travels() {
    return (
      <div>
        <SocialIcon/>
       <Navbar/>
      
       <div className="travelMain">
        <h3 className="title">Excursions</h3>
       </div>

      
       <div className="travel" >
      <h1>Excursions</h1>
      
      
    <div className="cards">  
               
      <div className="destination-item ">
         <img className="img-fluid" src="/img/img8.jpeg" alt=""/>
         <Link className="destination-overlay " to="/marsaAlam">
             <h5 className="text">Marsa Alam</h5>
                            
        </Link>
       </div>

       <div className="destination-item ">
         <img className="img-fluid" src="/img/img18.jpg" alt=""/>
         <Link className="destination-overlay " to="/hurghada">
             <h5 className="text">Hurghada</h5>
                           
        </Link>
       </div>

    </div>
    
    </div>

    <div className="homedesc">
      <h2>About Marsa Alam</h2>
      <p className="det">
      Marsa Alam - once a small fishing village, 
      now one of the most popular regions for holidays in Egypt.
       The Marsa Alam  is famous for the most beautiful sandy beaches
        in Egypt and for its wonderful underwater world and dolphins. 
        It is also a modern hotel base with a full list of amenities, 
        even for the most demanding guests. 
        It is one of the quieter places on the Red Sea Riviera. 
        The region is still considered an oasis of peace for families with children.
      </p>
      <p className="det">
      It is worth to diversify your vacation in Marsa Alam with optional excursions.
      </p>
      <h2>About Hurghada</h2>
      <p className="det">
      Hurghada is the best place in Egypt because it is the perfect place 
      for relaxation, for snorkeling and windsurfing.
      </p>
      <p className="det">
      From Hurghada you can go sightseeing in Cairo, Luxor, Dendera and Abydos and back on the same day
And Alexandria in two days
      </p>
      <p className="det">
      It is difficult to visit all this from another city and return on the same day, so we chose Hurghada to offer you all that is
attractive in Egypt
      </p>
      <p className="det">
      We have spent many years working in the tourism field  so that we can offer our best to tourists and we have succeeded
We are ready to answer all questions and And you are always invited to Egypt.
      </p>
    </div>
       <Copyright/>
      </div>
    );
  }
  
  export default Travels;