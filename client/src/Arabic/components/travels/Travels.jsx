import "./travels.scss";
import { Link} from "react-router-dom";

export default function Travels() {
  
  return (
    <div className="travels" >
      <h1 >الرحلات</h1>
    <div className="travel-cards">  
               
      <div className="destination-item ">
         <img className="img-fluid" src="/img/img8.jpeg" alt=""/>
         <Link className="destination-overlay " to="/marsaAlamArabic">
             <h5 className="text">مرسى علم</h5>
                            
        </Link>
       </div>

       <div className="destination-item ">
         <img className="img-fluid" src="/img/img18.jpg" alt=""/>
         <Link className="destination-overlay " to="/hurghadaArabic">
             <h5 className="text">الغردقه</h5>
                           
        </Link>
       </div>

    </div>
    </div>
   );
}