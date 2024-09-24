import React from "react";const Intro = () => {
   return (
      <div id="intro">
         <div className="container">
            <div className="logo">
               <img src="images/logo.png" alt="" />
            </div>
            <div className="main">
               <img id="texture1" src="images/rectangle.png" alt="" />
               <img id="texture2" src="images/rectangle.png" alt="" />
               <img id="texture3" src="images/rectangle.png" alt="" />
               <div className="text">
                  <h1>
                     Создайте успешный парфюмерный бизнес и заработайте от{" "}
                     <span>1 000 000</span> тенге в месяц
                  </h1>
                  <p>
                     Научитесь всему, что нужно для старта и развития бизнеса, с
                     нашими экспертами
                  </p>
                  <a id="calltoaction" href="#">
                     Записаться на курс{" "}
                     <img src="images/link-icon.png" alt="" />
                  </a>
               </div>
               <div className="avatar">
                  <img src="images/avatar.png" alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Intro;
