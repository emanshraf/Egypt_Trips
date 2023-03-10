import "./about.scss";
import { Link } from "react-router-dom";
function AboutB() {
   
    return (
      <div>
      <div className="about-contanier" dir="rtl">
        <div className="about-content">
            <p className="about-desc">
            أكثر من ثلاثون عاما من الخبرة في كل المجالات السياحية بمصر وأوروبا وبعض الدول الأسيوية، نتميز
عن الآخرين بتنوع الخبرات والدراسات العلمية والسمعة الطيبة المعروفة بالصدق والنزاهة والمشورة
والخدمة الشخصية الودية، لدينا مزيج رائع من الإدارة والموظفين المصريين والأجانب لتقديم أفضل خدمة
بأسعار تنافسية للغاية لضمان حصولك على تجربة شخصية لا تُنسى وممتعة للغاية.
                </p>
                <p className="about-desc">
                نحن ننفذ بك الى قلب مصر الحقيقية التي قد لا يراها معظم السائحين، ولكن بفضل مانتمتع به من مهارات
وخبرات عديدة ودراسات علمية اجتماعية وثقافية وتاريخية وأثرية نستطيع أن نقدم للسائح أفضل مالدينا
وأفضل مايمكنه رؤيته ومعرفته عن مصر.
                 </p>
                 <p className="about-desc">
                 ربما نكون الوحيدين الذين يقدمون كافة أنواع الرحلات والأنشطة السياحية للجميع سواء عائلات لديهم
أطفال أو شباب بأعلى مستوى للخدمة وأقل الأسعار، لأن هدفنا هو أن تستمتع معنا برحلتك وليس المال،
وفي سبيل ذلك نقدم أيضا المشورة ونساعدك في الاختيار الموفق للرحلة التي تناسبك وتشبع اهتماماتك،
فنحن نتعامل مع ضيوفنا من السياح كأصدقاء وعائلة.
                </p>
                <p className="about-desc">
                نحن نتعامل بشفافية ومهنية ولا نقدم سعر رخيص لجذب السائح ثم يكتشف بعد ذلك أن عليه أن يدفع
مصاريف أخرى اثناء الرحلة، فالسعر الذي نقدمه هو سعر شامل لكل ما يتم تقديمه في برنامج الرحلة.
                 </p>
                 <p className="about-desc">
                 نحن نقدم شرح لجميع تفاصيل الرحلات بما في ذلك عيوبها ومزاياها، لأننا نحرص على راحتك التامة من
وقت بدء الرحلة حتى اكتمالها.
                 </p>
                 <p className="about-desc">
                 نحن نقدم أعلى معايير الجودة في الخدمات السياحية، بدءًا من الموظفين والنقل والقوارب واليخوت البحرية
والأغذية والمشروبات ومعدات الغطس والغوص والسفاري.
                 </p>
                 <p className="about-desc">
                 نحن نتولى المسؤلية منذ خروجك من الفندق حتى عودتك اليه ونحصل على التصاريح وكل الأوراق
الرسمية التي تضمن ذلك فلا تنزعج إذا طلبنا منك بعض البيانات كالأسماء وأرقام الغرف وأحيانا يطلب
مننا صورة جواز السفر، وبالتالي فنحن مسؤلون عن إنتقالك من الفندق إلى مكان الرحلة وعودتك سالما إلى
الفندق.
                 </p>
                 <p className="about-desc">
                 والآن ندعوكم بحرارة للتعرف على عروضنا وإستخدام خدماتنا، وسيكون من دواعي سرورنا أن نستضيفكم.
                 </p>
                 <p className="about-desc">
                 وسنكون سعداء للغاية إذا تركت تعليقك الموضوعي على الإنطباعات من الرحلات التي ننظمها في صفحة
الآراء.
                 </p>
                 <p className="about-desc">
                 رقم ترخيص وزارة السياحة ١٢٧٥٤.
                 </p>

  
            <Link to="/contactArabic">
              <button className="about-btn">احجز الأن</button>
              </Link>

        </div>
      
     </div>


</div>
      
    );
  }
  
  export default AboutB;