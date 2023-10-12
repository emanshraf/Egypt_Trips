import "./contact.scss";
import Navbar from "../../components/supNavbar/Navbarsub";
import SocialIcon from "../../components/socialIcon/SocialIcon";
import Copyright from "../../components/copyright/Copyright";
import {  useRef, useState } from "react";
import emailjs from '@emailjs/browser';

function ContactArabic() {
  const form = useRef();
  const [message, setMessage] = useState(false);
  
  
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
    return (
      <div>
       <SocialIcon/>
       <Navbar/>
      
       <div className="travelMain" >
        <h3 className="title">تواصل معنا </h3>
       </div>


       <div className="info" dir="rtl">
        <div className="info-item">
            <img src="/img/address.png" className="icon" alt=""/>
            مصر, الغردقه, التحرير 35/43
        </div>
        <div className="info-item">
              <img src="/img/phone.png" className="icon" alt=""/>
               201090793007+
        </div>
        <div className="contactIcon">
        <div className="info-item">الأفضل الإتصال عن طريق</div>
        <div className="contactSocial" >
          <a href="https://www.facebook.com/egipt.tours" className="social" >
          <img className="iconSocial" src="/img/face.png"  alt="" width="30px" height="30px"/>
          </a>
          <a href="https://wa.me/+201210427168" target="_blank" rel="noreferrer" className="social">
          <img src="/img/whats2.png"  className="iconSocial" alt="" width="30px" height="30px"/>
          </a>
          </div>
      </div>
      </div>

      <p dir="rtl" className="info-item">وللحجوزات فقط، يمكنك إرسال رسالة إلينا باستخدام نموذج الإتصال أدناه:</p>
      
    <div className="contact" id="contact" dir="rtl">
      <div className="left">
        <img className="contact-img"  src="/img/contact.png" alt=""  />
      </div>
      <div className="right">
        {/* <h2>Contact with us</h2> */}
        <form onSubmit={sendEmail}>
        <label >الإسم:</label>
          <input type="text" name="name" />
          <label >الإيميل:</label>
          <input type="email" name="email" />
          <label >رقم التليفون:</label>
          <input type="tel"  name="phone number"/>
          <label >إسم الفندق:</label>
          <input type="text" name="HotelName" />
          <label>من يوم:</label>
          <input type="date" placeholder="Start date" />
          <label >إلى يوم:</label>
          <input type="date" placeholder="End date" />
          <label >إختر رحلتك:</label>
          <input type="text" name="trip" />
          <label >عدد الأشخاص:</label>
          <input type="number" name="people" />
          <label >إترك رسالتك هنا:</label>
          <textarea ></textarea>
          <button type="submit">إرسال</button>
          {message && <span>شكرا لك, سنقوم بالرد عليك فى اسرع وقت :)</span>}
        </form>
      </div>
    </div>
       <Copyright/>
      </div>
    );
  }
  
  export default ContactArabic;
