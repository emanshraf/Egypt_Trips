import "./subCategory.scss";
import Navbar from "../../components/supNavbar/Navbarsub";
import SocialIcon from "../../components/socialIcon/SocialIcon";
import Copyright from "../../components/copyright/Copyright";
import { useLocation } from "react-router";
import Products from "../../components/products/Products";
import {useState , useEffect} from "react";
import axios from "axios";


function SubCategory() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  
  const [Category, setCategory] = useState({});

  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await axios.get(
            `http://localhost:5000/api/catigories/find?category=${cat}`
        );
        setCategory(res.data[0]);
      } catch {}
    };
    getCategory();
  }, [cat]);
  

    return (
      <div>
        <SocialIcon/>
       <Navbar/>
       <div>
       <div className="travelMain">
        <h3 className="category-title">{Category.subtitle}</h3>
       </div>
       <div className="travel" >
      <h3 className="marsaTitle">{Category.subtitle}</h3>
    <div className="travelDesc">
      <p className="categoryp">{Category.desc1}</p>
      <p className="categoryB">{Category.subtitle1}</p>
      <p className="categoryp">{Category.desc2}</p>
      <p className="categoryB">{Category.subtitle2}</p>
      <p className="categoryp">{Category.desc3}</p>
      <p className="categoryB">{Category.subtitle3}</p>
      <p className="categoryp">{Category.desc4}</p>
      <p className="categoryp">{Category.desc5}</p>
      <p className="categoryp">{Category.desc6}</p>
      <p className="categoryp">{Category.desc7}</p>
      </div>
    </div>
    </div>
    
    <Products cat={cat} />
       <Copyright/>
      </div>
    );
  }
  
  export default SubCategory;