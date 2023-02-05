import "./about.scss";
function About() {
   
    return (
      <div className="about" dir="rtl">
      <div className="desc">
        <h1>اكتشف معنا جميع أنحاء مصر</h1>
        <h2 >مرشد خاص بمصر</h2>
        {/* <h2> الخدمة باللغة العربية</h2> */}
         <p>الأطفال حتى سن 6 سنوات يذهبون مجانًا في معظم الرحلات 
          , والأطفال من سن 6 إلى 12 سنة يدفعون نصف السعر لمعظم الرحلات.
            </p>
        {/* <p className="det">يتم توفير معلومات مفصلة حول الرحلات الاختيارية بواسطة المرشد في الموقع في مصر.</p> */}
         <p className="det">من الممكن أيضًا تنظيم رحلات خاصة - جمع مجموعة وأرسال إلينا  فكرتك وسننظم لك رحلة الأحلام !!!</p>
          <p className="det"> في حالة وجود عدد كافٍ من الأشخاص -  كل الرحلات ممكنة كل يوم !!!</p>
          <p className="det"> بالنسبة لجميع الرحلات ، سنقلك من فندقك ونعيدك إلى فندقك مرة أخرى.</p>
           
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