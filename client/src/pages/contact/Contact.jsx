import "./contact.scss";
import Navbar from "../../components/supNavbar/Navbarsub";
import SocialIcon from "../../components/socialIcon/SocialIcon";
import Copyright from "../../components/copyright/Copyright";
import {  useRef, useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
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
      
       <div className="travelMain">
        <h3 className="title">Contact with us</h3>
       </div>

       <div className="contact-desc">
        <p className="contactpp">ladies and gentlemen</p>
        <p className="contactp">
        It is a common thing after the tourist arrives at the hotel and meets 
        the tourleader sent by the company that booked the hotel, that the 
        tourleader tells the tourist that the local companies are deceiving
         the tourist, that they have bad organization and they do not have 
         insurance. 
        </p>
        <p className="contactp">
        This is not true, you can check yourself from the office
          you bought from in your country Whether we have insurance or not, 
          it doesn't matter if you go on a trip with your company or with a 
          local company, the only difference is the price.
        </p>
        <p className="contactp">
        The tourleader wants to sell the tourist trips at a very high price,
         and since many tourists have some concerns they buy from the 
         tourleader at a very expensive price.
        </p>
        <p className="contactp">
        I do not like it when someone sometimes writes dozens of emails to me
         or requests reservations, we book trips without money and after the
          tourist meets the tour leader, he completely ignores the reservation
           with us, and this costs us a lot of effort and money because we 
           book trips without getting any money from the tourist, 
           So I ask those who have any concerns, please do not write to us 
           and do not confirm the reservation unless you are confident that 
           you will attend the trip or cancel the reservation at least
            two days in advance.
        </p>
       </div>

       <div className="info">
        <div className="info-item">
            <img src="/img/address.png" className="icon" alt=""/>
            El Tahrir 35/43, Hurghada, Egypt
        </div>
        <div className="info-item">
              <img src="/img/phone.png" className="icon" alt=""/>
              +20 1005721840
        </div>
        <div className="contactIcon">
        <div className="info-item">It is best to contact by</div>
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

      <p className="info-item">And for reservations only, you can send us a message using the contact form below:</p>
      
    <div className="contact" id="contact">
      <div className="left">
        <img className="contact-img"  src="/img/contact.png" alt=""  />
      </div>
      <div className="right">
        <form onSubmit={sendEmail}>
        <label >Name:</label>
          <input type="text" name="name" />
          <label >Email:</label>
          <input type="email" name="email" />
          <label >phone number:</label>
          <input type="tel"  name="phone number"/>
          <label >Hotel name:</label>
          <input type="text" name="HotelName" />
          <label>Start date:</label>
          <input type="date" placeholder="Start date" />
          <label >End date:</label>
          <input type="date" placeholder="End date" />
          <label >Your trip:</label>
          <input type="text" name="trip" />
          <label >Number of people:</label>
          <input type="number" name="people" />
          <label >Your message:</label>
          <textarea ></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
       <Copyright/>
      </div>
    );
  }
  
  export default Contact;