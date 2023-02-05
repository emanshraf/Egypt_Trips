import "./marsaAlam.scss";
import Navbar from "../../components/supNavbar/Navbarsub";
import SocialIcon from "../../components/socialIcon/SocialIcon";
import Copyright from "../../components/copyright/Copyright";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

function MarsaAlamArabic() {
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    const getcategories = async () => {
      try {
        const res = await axios.get(
             "http://localhost:5000/api/catigoriesArabic/find?category=MarsaAlam"
        );
        setcategories(res.data);
      } catch (err) {}
    };
    getcategories();
  });

    return (
      <div>
        <SocialIcon/>
       <Navbar/>
      
       <div className="travelMain">
        <h3 className="title">مرسى علم </h3>
       </div>

      
       <div className="travels" >
      <h3 className="marsaTitle">رحلات مرسى علم</h3>

      
      
      <div className="marsalist">
      {categories.map((item)=>(
        <Link to={`/subCategoryArabic/${item.categories[1]}`} className="marsaLink">
      <div className="marsalistItem" key={item.id}>
        <div className="image">
        <img 
          src={item.img}
          alt=""
          className="marsaImg"
        />
        </div>
        <div className="marsatitle">
          <h3 className="marTitle">{item.title}</h3>
        </div>
      </div>
        </Link>
      ))}
        
    </div>
    <div className="travelsDesc" dir="rtl">
    <div className="travelDesc">
      <h4 className="travelsTitle">معلومات عن مرسى علم</h4>
      <p className="travelp">
      منتجع مرسى علم أحد أكثر الأماكن غموضًا في مصر، يقع على بعد حوالي مئتان وخمسون كم جنوب
الغردقة، قرية صيد سابقة هادئة وحميمة، لم تغمرها السياحة الجماعية، تتطور مؤخرًا بشكل ديناميكي
للغاية، من أفضل الأماكن في مصر للغوص، بسبب المياه النقية للغاية والطبيعة البرية والحيوانات والنباتات
غير العادية، وسحر ألوان العالم تحت الماء يسعد السياح من جميع أنحاء العالم، الشعاب المرجانية هنا
سليمة وجميلة بشكل استثنائي، أشهر مواقع الغوص هي أبو دابر ريف ومرسى صمداي ودولفين هاوس
وإلفستون ريف، قاعدة الإقامة هي في الأساس فنادق فاخرة تقع على الشواطئ الرملية والمرجانية وتتجمع
في الخلجان البحرية شمال الجزء الأوسط من مرسى علم.
      </p>
      <p className="travelp">
      بالتواجد هنا، يمكنك الذهاب في رحلة سفاري أو استكشاف العالم تحت الماء طوال اليوم.
      </p>
      <p className="travelp">
      مرسى علم هي المكان المثالي لقضاء عطلة، حيث يمكن للجميع التخطيط لإجازتهم وفقًا لاحتياجاتهم
وتفضيلاتهم، مع الاستفادة من العديد من وسائل الراحة التي تقدمها الفنادق المحلية.
      </p>
      <p className="travelp">
      تستحق بورت غالب الاهتمام - فهي وجهة سياحية تتطور بشكل ديناميكي، مع فنادق حديثة وظروف ممتازة
لممارسة الرياضات المائية، يتم بناء أكبر ميناء لليخوت على الساحل الأوسط هنا.
      </p>
      <p className="travelp">
      حوالي سبعون كم من مدينة مرسى علم تقع أقدم قرية سياحية - القصير، مع بلدة عربية قديمة، ومن الجدير
أيضًا أن نرى بقايا حصن عثماني من القرن السادس عشر مع متحف داخل أسواره.
      </p>
      <h4 className="travelsTitle">القصير</h4>
      <p className="travelp">
      منتجع القصير للسياح محبي المرح الجيد وجميع أنواع الترفيه، فضلاً عن كونه مكان الأحلام للغواصين،
توجد هنا نباتات ممتازة تحت الماء من أشجار المانجروف، ومجموعات خراف البحر، وسمك الزناد،
وكذلك نباتات الكوتريا والموراي ثعابين، المكان المثالي للغوص هو أيضًا البحيرات الشاطئية الرملية
والدافئة مع الكثير من الأسماك الغريبة الصغيرة الملونة.
      </p>
      <p className="travelp">
      القصير هو بحر لازوردي، وجبال لا يمكن الوصول إليها على الجانب الآخر، وواحدة من أجمل الشعاب
المرجانية في البحر الأحمر، ظروف ممتازة أيضًا لركوب الأمواج، يمكنك استئجار الدراجات المائية
والقوارب البخارية، وكذلك الذهاب في رحلة إبحار للاستمتاع بأركان الساحل المصري الساحرة و لن يشعر
السائحون الذين يحبون تذوق المأكولات الإقليمية خلال عطلاتهم بخيبة أمل في القصير، كل ما يحتاجون
إليه هو الذهاب إلى الكورنيش حيث يوجد العديد من الأطباق المحلية ويمكنك سماع الموسيقى العربية.
      </p>
    </div>
    </div>
    </div>
       <Copyright/>
      </div>
    );
  }
  
  export default MarsaAlamArabic;