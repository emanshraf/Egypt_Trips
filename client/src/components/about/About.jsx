import "./about.scss";
function About() {
   
    return (
      <div className="about">
      <div className="desc">
        <h1>Explore all corners of Egypt with us</h1>
        <h2 >Egypt Special Guide</h2>
        <h2> Service in English.</h2>
         <p>Children up to 6 years old go for free on most trips,
         and children from 6 to 12 years old pay half the price of most trips.
            </p>
        <p className="det">Detailed information about optional trips is provided by 
        the guide on site in Egypt.</p>
         <p className="det">It is also possible to organize private trips - collect a group and send us 
         an idea and we will organize  dream trip for you!!!</p>
          <p className="det"> In the case of sufficient number of people - 
          all excursions are possible every day!!!</p>
          <p className="det"> For all trips, we will pick you up from your hotel
          and return you to your hotel .</p>
           
      </div>
      <div className="img img1">
        <img src="/img/img24.webp" alt="" width="250px" height="350px"/>

      </div>
      <div className="img img2">
      <img src="/img/img38.jpg" alt="" width="250px" height="350px"/>
      </div>
     
      
      </div>
    );
  }
  
  export default About;