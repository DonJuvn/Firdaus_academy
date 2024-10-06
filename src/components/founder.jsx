import React, { useState } from "react";import PopupForm from "./form";

const Founder = () => {
   const [isPopupOpen, setIsPopupOpen] = useState(false);

   const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
   };

   return (
      <div id="founder">
         <div className="container">
            <div className="founder">
               <div className="avatar">
                  <img src="images/founder.png" alt="" />
               </div>
               <div className="text">
                  <h1>
                     Фирдаус <span>Оснаватель MUSKUS</span>
                  </h1>
                  <div className="p">
                     <p>(01)</p>
                     <p>
                        Фирдаус Хамитов - основатель магазина Muscus и онлайн
                        магазина Parfoa, также является основателем онлайн
                        бизнес курса Firdaus academy. Основал свой первый
                        парфюмерный проект в 17 лет. На данный момент к 22 годам
                        имеет за плечами сеть парфюмерных точек по городу Тараз.
                        Средний ежемесячный оборот до 5 000 000 - 10 000 000
                        тенге. Основывая курс Firdaus academy, решил делиться
                        секретами успеха в нише парфюмерии.
                     </p>
                  </div>
                  <button id="calltoaction" onClick={togglePopup}>
                     Выбрать <img src="images/link-icon.png" alt="link icon" />
                  </button>
                  {/* <a
                     id="calltoaction"
                     href="https://wa.me/77478602030?text=Здравствуйте, хочу записаться на ваш курс по парфюмерии"
                  >
                     Свяжитесь с нами <img src="images/link-icon.png" alt="" />
                  </a> */}
               </div>
            </div>
         </div>
         {isPopupOpen && <PopupForm togglePopup={togglePopup} />}
      </div>
   );
};

export default Founder;
