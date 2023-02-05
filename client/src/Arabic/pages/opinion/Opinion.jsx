import "./opinion.scss";
import Navbar from "../../components/supNavbar/Navbarsub";
import SocialIcon from "../../components/socialIcon/SocialIcon";
import Copyright from "../../components/copyright/Copyright";
import {  useRef, useState } from "react";
import { Rating } from 'react-simple-star-rating';
import emailjs from '@emailjs/browser';

function OpinionArabic() {
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
       <h3 className="title">الآراء</h3>
      </div>

      
    <div className="contact" dir="rtl">
      
      <div className="right" >
        <h2>أخبرنا عن رأيك ، هل كانت تجربتك كما تمنيت؟
</h2>
        <form onSubmit={sendEmail}>
         
          <input type="text" placeholder="أدخل الإسم" />
          <input type="email" placeholder="أدخل الإميل" />
          <input type="text" placeholder="حدد رحلتك" />
          <textarea type="text" placeholder="إكتب رأيك" />
          <div className="photo">
          <label for="myfile">أضف صور:</label>
          <input type="file"  name="myfile" multiple/>
         </div>
         <div className="photo">
          <label for="myfile" >ضع تقيمك</label>
          <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
      />
         </div>
          <button type="submit">Send</button>
          {message && <span>شكرا لك على اعطائنا تقيمك لرحلتنا :)</span>}
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
  
  export default OpinionArabic;