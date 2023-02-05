import "./intro.scss";
import AnimatedText from 'react-animated-text-content';
import { Link } from "react-router-dom";

export default function Intro() {
  
  return (
    <div className="intro" dir="rtl">
        <div className="content">
          <AnimatedText
  type="words" 
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="bounce"
  interval={0.06}
  duration={0.8}
  tag="h1"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
اكتشف معنا اماكن مذهلة
</AnimatedText>
<div className="Link">
  <Link to="/contactArabic" className="link">
    <button className="intro-btn">
      احجز الأن 
    </button>
  </Link>
</div>   
         </div>
    </div>
  );
}