import "./hurghada.scss";
import Navbar from "../../components/supNavbar/Navbarsub";
import SocialIcon from "../../components/socialIcon/SocialIcon";
import Copyright from "../../components/copyright/Copyright";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

function Hurghada() {
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    const getcategories = async () => {
      try {
        const res = await axios.get(
             "http://localhost:5000/api/catigories/find?category=Hurghada"
        );
        setcategories(res.data);
      } catch (err) {}
    };
    getcategories();
  });
    return (
      <div>
        <SocialIcon/>
       <Navbar/>
      
       <div className="travelMain">
        <h3 className="title">Hurghada </h3>
       </div>

       <div className="travels" >
      <h3 className="marsaTitle" >Hurghada  Excursions</h3>

    <div className="marsalist">
      {categories.map((item)=>(
        <Link to={`/subCategory/${item.categories[1]}`} className="marsaLink">
      <div className="marsalistItem" key={item.id}>
        <div className="image">
        <img 
          src={item.img}
          alt=""
          className="marsaImg"
        />
        </div>
        <div className="marsatitle">
          <h3 className="marTitle">{item.title}</h3>
        </div>
      </div>
        </Link>
      ))}
        
    </div>

    <div className="travelsDesc">
      <div className="travelDesc">
      <h4 className="travelsTitle">ABOUT HURGHADA</h4>
      <p className="travelp">
      Over the past 30 years, Hurghada has been transformed from a small fishing
       village with several hundred residents into one of the most famous tourist
        destinations in North Africa.
      </p>
      <p className="travelp">
      The resort is located on the Red Sea, on the western shore of the Gulf of Suez, 
      about 500 km from the Egyptian capital - Cairo.
      It achieved its fame thanks to its location on the clear sea,
      It abounds with  picturesque coral reefs, which are the main advantage of
       Hurghada. In addition, the proximity of the endless desert,
       picturesque mountain range, quiet and peaceful surroundings, 
       sandy beaches - all this attracts tourists who want to relax.
      </p>
      <p className="travelp">
      Hurghada is a very suitable starting point for optional excursions.
       Hurghada is also considered a paradise for lovers of various water sports,
      especially diving and snorkeling.
      </p>
      <p className="travelp">
      The city is still a dynamically developing tourist center - new 
      facilities and hotels are being built. Therefore, 
      you should expect construction works in the vicinity of the hotel.
      </p>
      <p className="travelp">
      The tourist season lasts here all year round thanks to 
      favorable air temperatures and warm waters of the Red Sea,
       the temperature of which varies between 19C - 23C in winter and 22C - 26C in
        summer.
      </p>
      <p className="travelp">
      Hurghada has two centers: SAKKALA  and AL DAHAR, 
      where you will find numerous restaurants,
       pubs, clubs, shops and Arab bazaars.
      </p>
      <p className="travelp">
      All diving enthusiasts have the opportunity to broaden their skills here as
       Hurghada has many schools
Diving that offers professional training, 
qualified instructors and the possibility of obtaining an international license.
      </p>
      <p className="travelp">
      We also encourage you to visit the local Aquarium, where you can observe underwater fauna and flora; similar attractions are provided by a submarine or glass-bottom boat trip, 
      from which you can take photos.
      </p>
      <h4 className="travelsTitle"> El Gouna</h4>
      <p className="travelp">
      El Gouna - a very luxurious hotel city, artificially created and privately
       owned, the beauty of this place
Not only for it being a relatively quiet and clean place, 
but also for the fact that the city consists of several
Islands that are separated by canals and linked by bridges, 
are sometimes called the Egyptian Venice.
      </p>
      <h4 className="travelsTitle"> Sharm El-Naga</h4>
      <p className="travelp">
      Sharm El-Naga - a village located about 40 km south of Hurghada,
       along the local beach there are beautiful coral reefs located only ten
        meters from the beach.
      </p>
      <h4 className="travelsTitle"> Gulf of Makadi   </h4>
      <p className="travelp">
      Gulf of Makadi  - located about 30 km south of Hurghada,
       there are hotels scattered on vast terrain along the bay, 
       this place is famous for its beautiful beaches and coral reefs located
        right on the beach.
      </p>
    </div>
    </div>
    </div>
       <Copyright/>
      </div>
    );
  }
  
  export default Hurghada;