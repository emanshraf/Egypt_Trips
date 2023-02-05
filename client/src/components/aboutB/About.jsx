import "./about.scss";
import { Link } from "react-router-dom";
function AboutB() {
   
    return (
      <div>
      <div className="about-contanier">
        <div className="about-content">
            <p className="about-desc">
            More than thirty years of experience in all tourism fields in Egypt, 
            Europe and some Asian countries. We are distinguished from others by 
            the diversity of expertise, scientific studies and a good reputation
             known for honesty, integrity, advice and friendly personal service.
              We have a wonderful mix of Egyptian and foreign management and
               employees to provide the best service at very competitive prices 
               to ensure that you get An unforgettable personal experience.
                </p>
                <p className="about-desc">
                We take you to the heart of the real Egypt that most tourists
                 may not see, but thanks to our many skills and experiences 
                 and scientific, social, cultural, historical and 
                 archaeological studies, we can offer the tourist the best of
                  what we have and the best that he can see and know about 
                  Egypt.
                 </p>
                 <p className="about-desc">
                 We may be the only ones who offer all kinds of trips and 
                 tourism activities for everyone, whether families with 
                 children or youth, with the highest level of service and the
                  lowest prices, because our goal is to enjoy your trip with 
                  us, not money. For this we also offer advice and help you 
                  choose the right trip that suits you and satisfies your 
                  interests. We treat our guests as friends and family.
                </p>
                <p className="about-desc">
                We deal transparently and professionally. We do not offer
                 a cheap price to attract a tourist, and then discover that 
                 he has to pay other expenses during the trip. The price we offer 
                 is a comprehensive price for everything that is offered in the trip program.
                 </p>
                 <p className="about-desc">
                 We provide an explanation of all the details of the trips, 
                 including its disadvantages and advantages, because we take care of 
                 your complete comfort from the time of the start of the trip until 
                 its completion.
                 </p>
                 <p className="about-desc">
                 We provide the highest quality standards in tourism services,
                  starting from personnel, transportation, boats and marine 
                  yachts, food and beverages, snorkeling, diving and safari equipment.
                 </p>
                 <p className="about-desc">
                 We take responsibility from the moment you leave the hotel until you
                  return to it, and we obtain the permits and all the official papers 
                  that guarantee that, so do not be disturbed if we ask you for some data
                   such as names and room numbers, and sometimes we are asked for a copy 
                   of the passport, and therefore we are responsible for your transfer from the hotel to the place of the trip and your safe return to the hotel.
                 </p>
                 <p className="about-desc">
                 Now we cordially invite you to know about our offers and use our services,
                  and it will be our pleasure to host you
                 </p>
                 <p className="about-desc">
                 We will be very pleased if you leave your objective comment on your 
                 impressions of the excursions we organize on the reviews page.
                 </p>
                 <p className="about-desc">
                 Ministry of Tourism License No. 12754
                 </p>

  
            <Link to="/contact">
              <button className="about-btn">Book Now</button>
              </Link>

        </div>
      
     </div>


</div>
      
    );
  }
  
  export default AboutB;