import "./hurghada.scss";
import Navbar from "../../components/supNavbar/Navbarsub";
import SocialIcon from "../../components/socialIcon/SocialIcon";
import Copyright from "../../components/copyright/Copyright";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

function HurghadaArabic() {
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    const getcategories = async () => {
      try {
        const res = await axios.get(
             "http://localhost:5000/api/catigoriesArabic/find?category=Hurghada"
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
        <h3 className="title">الغردقه </h3>
       </div>

       <div className="travels" >
      <h3 className="marsaTitle" >رحلات الغردقه</h3>

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
      <h4 className="travelsTitle">معلومات عن الغردقه</h4>
      <p className="travelp">
      تحولت الغردقة على مدار 30 عامًا من قرية صيد صغيرة تضم عدة مئات من السكان إلى واحدة من أشهر
الوجهات السياحية في شمال إفريقيا.
      </p>
      <p className="travelp">
      يقع المنتجع على البحر الأحمر، على الشاطئ الغربي لخليج السويس ، على بعد حوالي خمسمائة كيلومتر
من العاصمة المصرية – القاهرة، وحققت شهرة بفضل موقعها الرائع على البحر الأحمر الصافي، وتكثر
فيه الشعاب المرجانية الخلابة، والتي تعد الميزة الرئيسية للغردقة، بالإضافة إلى قربها من الصحراء التي لا
نهاية لها، وسلسلة الجبال الخلابة، والشواطئ الرملية - كل هذا يجذب السياح الراغبين في الاسترخاء.
      </p>
      <p className="travelp">
      تعتبر الغردقة نقطة انطلاق مناسبة جدًا للرحلات الاختيارية.
      </p>
      <p className="travelp">
      تعتبر الغردقة جنة لعشاق الرياضات المائية المختلفة وخاصة الغوص والغطس.
      </p>
      <p className="travelp">
      لا تزال المدينة مركزًا سياحيًا متطورًا بشكل ديناميكي - حيث يتم بناء مرافق وفنادق جديدة، لذلك، يجب أن
تتوقع أعمال البناء في محيط الفندق.
      </p>
      <p className="travelp">
      يستمر الموسم السياحي هنا على مدار السنة بفضل درجات حرارة الهواء الملائمة والمياه الدافئة للبحر
الأحمر، حيث تتراوح درجة حرارته بين تسعة عشر – ثلاثة وعشرون درجة مئوية في الشتاء و إثنين
وعشرون – ستة وعشرون درجة مئوية في الصيف.
      </p>
      <p className="travelp">
      ويوجد في الغردقة مركزان: السقالة والدهار، حيث ستجد العديد من المطاعم والحانات والنوادي والمحلات
التجارية والبازارات العربية
      </p>
      <p className="travelp">
      كل عشاق الغوص لديهم الفرصة لتوسيع نطاق مهاراتهم هنا حيث يوجد في الغردقة العديد من مدارس
الغوص التي تقدم تدريبات مهنية ومدربين مؤهلين وإمكانية الحصول على رخصة دولية.
      </p>
      <p className="travelp">
      نشجعك أيضًا على زيارة الأكواريوم المحلي، حيث يمكنك مشاهدة الحيوانات والنباتات تحت الماء.
      </p>
      <p className="travelp">
      ويتم توفير عوامل الجذب المماثلة من خلال رحلة بواسطة الغواصة أو القارب الزجاجي، حيث يمكنك
التقاط الصور.
      </p>
      <h4 className="travelsTitle"> الجونه</h4>
      <p className="travelp">
      الجونة - مدينة فندقية فاخرة للغاية، تم إنشاؤها بشكل مصطنع ومملوكة للقطاع الخاص، جمال هذا المكان لا
يرجع فقط إلى حقيقة أنه مكان هادئ ونظيف نسبيًا، بل يرجع أيضًا إلى حقيقة أن المدينة تتكون من عدة
جزر تفصلها قنوات وتتصل بها جسور، في بعض الأحيان يطلق عليها فينيسيا المصرية.
      </p>
      <h4 className="travelsTitle"> شرم الناقه</h4>
      <p className="travelp">
      شرم الناقة - قرية تقع على بعد حوالي أربعون كم جنوب الغردقة، على طول الشاطئ المحلي توجد شعاب
مرجانية جميلة تقع على بعد عشرة أمتار فقط من الشاطئ.
      </p>
      <h4 className="travelsTitle"> خليج مكادى  </h4>
      <p className="travelp">
      خليج مكادي - يقع على بعد حوالي ثلاثون كم جنوب الغردقة، هناك فنادق منتشرة على تضاريس شاسعة
على طول الخليج، يشتهر هذا المكان بشواطئه الجميلة وشعابه المرجانية الواقعة على الشاطئ مباشرة.
      </p>
    </div>
    </div>
    </div>
       <Copyright/>
      </div>
    );
  }
  
  export default HurghadaArabic;