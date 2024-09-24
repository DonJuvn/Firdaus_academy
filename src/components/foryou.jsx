import React from "react";
const ForYou = () => {
   return (
      <div id="foryou">
         <div className="container">
            <div className="foryou">
               <h1 id="title">Этот курс для вас, если...</h1>
               <div className="text">
                  <div className="item">
                     <h4>
                        Вы ищете прибыльную нишу <span>для старта бизнеса</span>
                     </h4>
                     <img src="images/link-icon-white.png" alt="" />
                  </div>
                  <div className="item">
                     <h4>
                        Вы уже предприниматель и хотите{" "}
                        <span>расширить свой бизнес</span>
                     </h4>
                     <img src="images/link-icon-white.png" alt="" />
                  </div>
                  <div className="item">
                     <h4>
                        Вы хотите зарабатывать от{" "}
                        <span>1000 000 тенге в месяц</span>
                     </h4>
                     <img src="images/link-icon-white.png" alt="" />
                  </div>
                  <div className="item">
                     <h4>
                        Вы студент или мама в декрете и хотите{" "}
                        <span>начать свой бизнес </span>
                     </h4>
                     <img src="images/link-icon-white.png" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ForYou;
