import "./marsaAlam.scss";
import Navbar from "../../components/supNavbar/Navbarsub";
import Copyright from "../../components/copyright/Copyright";
import SocialIcon from "../../components/socialIcon/SocialIcon";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

function MarsaAlam() {
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    const getcategories = async () => {
      try {
        const res = await axios.get(
             "http://localhost:5000/api/catigories/find?category=MarsaAlam"
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
        <h3 className="title">Marsa Alam </h3>
       </div>

      
       <div className="travels" >
      <h3 className="marsaTitle">Marsa Alam Excursions</h3>

      
      
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
      <h4 className="travelsTitle">ABOUT MARSA ALAM</h4>
      <p className="travelp">
      Marsa Alam resort is one of the most mysterious places in Egypt, 
      located about 250 km south of Hurghada.
      Calm and intimate, not yet mastered by mass tourism, 
      the former fishing village has recently been developing very dynamically.
       One of the best places in Egypt for diving, due to the extremely clean 
       water and still wild nature. The unusual fauna and flora of the Red Sea waters
        and the magic of the colors of the underwater world delight tourists from 
        all over the world. The coral reefs here are untouched and exceptionally 
        beautiful. The most famous diving spots are Abu Dabur Reef, Marsa Asslai,
         Dolphin Mouse and Elphistone Reef. 
         The accommodation base consists primarily of luxury hotels located on sandy 
         and coral beaches and concentrated in sea bays north of the central part of 
         Marsa el Alam.
      </p>
      <p className="travelp">
      Being here, you can go on a safari or explore the underwater world all day long.
      </p>
      <p className="travelp">
      Marsa Alam is the ideal place for a vacation, 
      where everyone can plan their vacation according to their needs
and their preferences, while taking advantage of the many amenities offered by 
local hotels.
      </p>
      <p className="travelp">
      Port Ghalib deserves attention - it is a dynamically developing tourist destination, with modern hotels and excellent conditions
For water sports, the largest yacht port on the central coast is being built here.
      </p>
      <h4 className="travelsTitle">ElQuser</h4>
      <p className="travelp">
      El Quseir resort for the most demanding tourists, for fun lovers and all 
      kinds of entertainment, in addition to being an ideal place for divers,
       there are wonderful underwater plants of mangroves, groups of manatees,
        triggerfish as well as cutters and moray eels. The sandy and warm lagoons
         with lots of colorful small exotic fish is also an ideal place for 
         snorkeling.
      </p>
      <p className="travelp">
      Quseir is an azure sea, inaccessible mountains on the other side and
       one of the most beautiful coral reefs in the Red Sea. 
       Excellent conditions for windsurfing, you can rent jet skis and motor boats
        here, as well as go on a sailing trip to enjoy the charming corners of 
        the Egyptian coast - Marsa Alam Tourism Tourists who love to sample 
        regional cuisine during their holidays do not be disappointed at El Quuser. 
        It is enough for them to go to the promenade, where there are many aromas of 
        local dishes and Arabic music can be heard.
      </p>
    </div>
    </div>
    </div>
       <Copyright/>
      </div>
    );
  }
  
  export default MarsaAlam;