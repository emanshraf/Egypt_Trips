import "./languge.scss";
import React from 'react';

const Languge = () => {
  return (
    <div className='languge'>
       <div className="languge-item"> <a href='/' className="languge-link" >English</a> </div>
       <div className="languge-item"><a href='/homeArabic' className="languge-link" >عربى</a></div>
        <div className="languge-item"><a href='/homeRussian' className="languge-link" >Русский</a></div>
      
    </div>
  )
}

export default Languge
