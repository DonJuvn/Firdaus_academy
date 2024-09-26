import React from "react";
const HowToStudy = () => {
   return (
      <div id="foryou">
         <div className="container">
            <div className="foryou">
               <h1 id="title">Как проходит обучение?</h1>
               <div className="text">
                  <div className="item">
                     <h4>(01) Выбираете тариф</h4>
                     <img src="images/link-icon-white.png" alt="" />
                  </div>
                  <div className="item">
                     <h4>(02) Получаете доступ к материалам</h4>
                     <img src="images/link-icon-white.png" alt="" />
                  </div>
                  <div className="item">
                     <h4>(03) Проходите обучение с поддержкой</h4>
                     <img src="images/link-icon-white.png" alt="" />
                  </div>
                  <div className="item">
                     <h4>
                        (04) Получаете сертификат и помощь в запуске бизнеса
                     </h4>
                     <img src="images/link-icon-white.png" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HowToStudy;
