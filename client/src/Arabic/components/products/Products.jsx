import "./products.scss";

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

function Products({cat}) {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        const getproducts = async () => {
          try {
            const res = await axios.get(
                 `http://localhost:5000/api/productsArabic/find/?category=${cat}`
            );
            setproducts(res.data);
          } catch (err) {}
        };
        getproducts();
      },[cat]);

    return (
      <div>

       <div className="cards" dir="rtl">
      {products.map((item)=>(
        
      <div className="card" key={item.id}>
        <Link to={`/productArabic/${item._id}`} className="card-link">
        <div className="card-body">
        <img 
          src={item.img}
          alt=""
          className="card-img"
        />
        
        <div className="card-content">
          <h3 className="card-title">{item.title}</h3>
          <h5 className="card-subTitle">{item.comment}</h5>
          <div  className="card-desc">{item.desc}</div>
          </div>
          <Link to={`/productArabic/${item._id}`} className="card-link">
          <button className="card-btn">Read more</button>
           </Link>
      </div>
      
      </Link>
      </div>
      ))}
    </div>
      </div>
    );
  }
  
  export default Products;