import "./opinion.scss";
import Navbar from "../../components/supNavbar/Navbarsub";
import Copyright from "../../components/copyright/Copyright";
import SocialIcon from "../../components/socialIcon/SocialIcon";
import {  useRef, useState } from "react";
import { Rating } from 'react-simple-star-rating';
import emailjs from '@emailjs/browser';

function Opinion() {
  const form = useRef();

  const [message, setMessage] = useState(false);
  const [rating, setRating] = useState(0)
  
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gkk2e8q', 'template_g8fq5wq', form.current, '0ZUbmrjIYGt7R9MOj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

    const handleRating = (rate) => {
      setRating(rate)
    } 
    const onPointerEnter = () => console.log('Enter');
    const onPointerLeave = () => console.log('Leave');
    const onPointerMove = (value, index) => console.log(value, index);

    return (
      <div>
        <SocialIcon/>
       <Navbar/>
      
      <div className="travelMain">
       <h3 className="title">Opinions</h3>
      </div>

      
    <div className="contact" >
      
      <div className="right">
        <h2>Tell us about your opinion, Was your experience as you wished?</h2>
        <form onSubmit={sendEmail}>
         
          <input type="text" placeholder="Enter your Name" />
          <input type="email" placeholder="Enter your email" />
          <input type="text" placeholder="Your trips" />
          <textarea type="text" placeholder="Enter your opinion" />
          <div className="photo">
          <label for="myfile">Select photos:</label>
          <input type="file"  name="myfile" multiple/>
         </div>
         <div className="photo">
          <label for="myfile" >Put your rating</label>
          <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
      />
         </div>
          <button type="submit">Send</button>
          {message && <span>Thank you for giving us your review of our trip :)</span>}
        </form>
      </div>
      <div className="left">
        <img className="contact-img" src="/img/opinion.png" alt=""  />
      </div>
    </div>
      <Copyright/>
      </div>
    );
  }
  
  export default Opinion;