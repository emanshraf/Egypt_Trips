import React from 'react'
import "./social.scss";
const SocialIcon = () => {
  return (
    <div className="socialItems">
        <div className="socialItem" >
          <a href="https://www.facebook.com/egipt.tours" className="social" >
          <img className="socialImg" src="/img/face.png"  alt="" width="40px" height="40px"/>
          </a>
          </div>
           <div className="socialItem" >
          <a href="https://wa.me/+201210427168" target="_blank" rel="noreferrer" className="social">
          <img src="/img/whats2.png"  className="socialImg" alt="" width="40px" height="40px"/>
          </a>
          </div>
    </div>
  )
}

export default SocialIcon
