import React from 'react';
import "./opinion.scss";

import axios from "axios";
import { useEffect, useState,    } from "react";

const Opinion = () => {
    const [opinion, setOpinion] = useState([]);
    useEffect(() => {
    const getopinion = async () => {
      try {
        const res = await axios.get(
             "http://localhost:5000/api/opinionsArabic/find"
        );
        setOpinion(res.data);
      } catch (err) {}
    };
    getopinion();
  });
  
const [slideNumber, setSlideNumber] = useState(0);
const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 4 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 4 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div className='contianer'>
       <div className='opinion-title'> 
       <h1 >الآراء</h1>
      <h3  >ماذا يقول عملاؤنا عنا؟</h3>
        </div>
      <div className="opinion">
         <div className='opinion-arrow' style={{ left: 0 }} onClick={() => handleMove("l")}>
            <img src="/img/arrowl.png" alt="" className='opinion-arrow'/>
         </div>
            <div  className="opinion-wrapper " style={{transform:`translateX(${-100*slideNumber}vw)`}}>
            {opinion.map((items) =>(
                <div className='opinion-card'>
                    <div className='opinion-c'>
            <img className='opinion-img' src={items.img} alt=""/>
        <h3 className='opinion-name'>{items.name}</h3>
        <div className='opinion-desc'>{items.opinion} </div>
        <a herf={items.link} className='opinion-link opinion-desc'>{items.link}</a>
        </div>
        </div>
            ))}
            </div>
            <div className='opinion-arrow' style={{ right: 0 }} onClick={() => handleMove("r")}>
            <img src="/img/arrowr.png" alt="" className='opinion-arrow'/>
            </div>
      </div>
    </div>  
  )
}

export default Opinion
