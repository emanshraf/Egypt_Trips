import "./product.scss";
import Navbar from "../../components/supNavbar/Navbarsub";
import SocialIcon from "../../components/socialIcon/SocialIcon";
import Copyright from "../../components/copyright/Copyright";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import {publicRequest} from "../../../requestMethods";

function ProductArabic() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/productsArabic/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };
    return (
      <div>
        <SocialIcon/>
       <Navbar/>
       <div className="travelMain">
        <h3 className="title">{product.subtitle}</h3>
       </div>

       <div className="travel" dir="rtl">
      <h3 className="marsaTitle" >{product.title}</h3>

      <div className="productDesc">
        <p className="productp">{product.description1} </p>
        <p className="productp">{product.description2} </p>
        <p className="productp">{product.description3} </p>
      </div>

      <div className="product">
        <div className="productImg">
            <img className="productimg" src={product.img} alt=""/>
        </div>
        <div className="productProgram">
        <h4 className="productTitle">Trip program</h4>
        <div className="productProg">
            <p className="productB">{product.prog1}</p>
            <p className="productp">{product.program1}</p>
            <p className="productB">{product.prog2}</p>
            <p className="productp">{product.program2}</p>
            <p className="productpp">{product.programextra1}</p>
            <p className="productpp">{product.programextra2}</p>
            <p className="productpp">{product.programextra3}</p>
            <p className="productpp">{product.programextra4}</p>
            <p className="productpp">{product.programextra5}</p>
            <p className="productpp">{product.programextra6}</p>
            <p className="productB">{product.prog3}</p>
            <p className="productp">{product.program3}</p>
            <p className="productpp">{product.programextra7}</p>
            <p className="productpp">{product.programextra8}</p>
            <p className="productpp">{product.programextra9}</p>
            <p className="productpp">{product.programextra10}</p>
            <p className="productB">{product.prog4}</p>
            <p className="productp">{product.program4}</p>
            <p className="productp">{product.programextra11}</p>
            <p className="productpp">{product.programextra12}</p>
            <p className="productpp">{product.programextra13}</p>
            <p className="productB">{product.prog5}</p>
            <p className="productp">{product.program5}</p>
            <p className="productB">{product.prog6}</p>
            <p className="productp">{product.program6}</p>
            <p className="productB">{product.prog7}</p>
            <p className="productp">{product.program7}</p>
            <p className="productB">{product.prog8}</p>
            <p className="productp">{product.program8}</p>
            </div>
        </div>
      </div>

      <div className="productDesc">
        <p className="productp">{product.desc1} </p>
        <p className="productp">{product.desc2} </p>
        <p className="productp">{product.desc3} </p>
        <p className="productp">{product.desc4} </p>
        <p className="productp">{product.desc5} </p>
      </div>
      <div className="productGallaryContainer">
      {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={product.gallary[slideNumber]} 
              alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="productGallaryWrapper">
        <div className="productGallaryImages">
          {product.gallary?.map((items, i)=>(
            <div className="productImagesImgWrapper" key={i}>
            <img src={items} className="productGallaryItem"  alt=""
            onClick={() => handleOpen(i)}
            />
            </div>
          ))}
        </div>
        </div>
        </div>

        
    </div>
       <Copyright/>
      </div>
    );
  }
  
  export default ProductArabic;