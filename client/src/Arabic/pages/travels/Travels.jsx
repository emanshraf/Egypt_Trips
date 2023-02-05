import "./travels.scss";
import Navbar from "../../components/supNavbar/Navbarsub";
import SocialIcon from "../../components/socialIcon/SocialIcon";
import Copyright from "../../components/copyright/Copyright";
import { Link } from "react-router-dom";

function TravelsArabic() {
    return (
      <div>
       <SocialIcon/>
       <Navbar/>
      
       <div className="travelMain">
        <h3 className="title">الرحلات</h3>
       </div>

      
       <div className="travel" >
      <h1>الرحلات</h1>
      
      
    <div className="cards">  
               
      <div className="destination-item ">
         <img className="img-fluid" src="/img/img8.jpeg" alt=""/>
         <Link className="destination-overlay " to="/marsaAlamArabic">
             <h5 className="text">مرسى علم</h5>
                            
        </Link>
       </div>

       <div className="destination-item ">
         <img className="img-fluid" src="/img/img18.jpg" alt=""/>
         <Link className="destination-overlay " to="/hurghadaArabic">
             <h5 className="text">الغردقه</h5>
                           
        </Link>
       </div>

    </div>
    
    </div>

    <div className="homedesc" dir="rtl">
      <h2>معلومات عن مرسى علم</h2>
      <p className="det">
      مرسى علم - كانت قرية صيد صغيرة، وأصبحت الآن واحدة من أكثر المناطق شعبية لقضاء العطلات في
مصر.
      </p>
      <p className="det">
      تشتهر منطقة مرسى علم بأجمل الشواطئ الرملية في مصر وعالمها الرائع تحت الماء والدلافين.
      </p>
      <p className="det">
      هي أيضًا قاعدة فندقية حديثة مع قائمة كاملة من وسائل الراحة، حتى للضيوف الأكثر تطلبًا، إنها واحدة من
أكثر الأماكن هدوءًا في ريفييرا البحر الأحمر، ولا تزال المنطقة تعتبر واحة سلام للعائلات التي لديها
أطفال.
      </p>
      <p className="det">
      يجدر بك تنويع إجازتك في مرسى علم برحلات اختيارية.
      </p>
      <h2>معلومات عن الغردقة</h2>
      <p className="det">
      الغردقة هي أفضل مكان في مصر حيث أنها المكان المثالي للراحة وكذلك الغطس ورياضة الون سيرف
من الغردقة يمكنك الذهاب لمشاهدة معالم القاهرة والأقصر ودندرة وأبيدوس والعودة في نفس اليوم
والإسكندرية في يومين.
      </p>
      <p className="det">
      من الصعب زيارة كل هذا من مدينة أخرى والعودة في نفس اليوم، لذلك اخترنا الغردقة لنقدم لك كل ما هو
جذاب في مصر.
      </p>
      <p className="det">
      لقد أمضينا سنوات عديدة في العمل في مجال السياحة حتى نتمكن من تقديم أفضل ما لدينا للسياح وقد نجحنا
نحن منفتحون على كل سؤال وأنت مدعو دائمًا إلى مصر.
      </p>
      <p className="det">
     
      </p>
    </div>
       <Copyright/>
      </div>
    );
  }
  
  export default TravelsArabic;