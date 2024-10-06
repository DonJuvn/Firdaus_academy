import React, { useState } from "react";import PopupForm from "./form";

const Price = () => {
   const [activeIndex, setActiveIndex] = useState(0);

   const prices = [
      {
         title: "Online 50.000 тг",
         oldPrice: "100.000 тг",
         features: [
            "До 15 видеоуроков.",
            "Доступ на видеоуроки до 6 месяцев.",
            "3 видеосозвона по Zoom с самим основателем.",
            "Вступление в бизнес клуб «Парфюмер».",
            "В конце будем давать сертификат о прохождении курса.",
         ],
         url: "https://wa.me/77478602030?text=Здравствуйте, хочу записаться на ваш курс по парфюмерии. Я хотел бы выбрать тариф ONLINE",
      },
      {
         title: "Offline 500.000 тг",
         oldPrice: "700.000 тг",
         features: [
            "Обучение 1 месяц.",
            "Обратная связь на уроках и в чате.",
            "Приглашенные топовые спикеры.",
            "Доступ на 6 месяцев на видеоуроки.",
            "Техническая поддержка.",
            "Бизнес ланч.",
            "Вступление в бизнес клуб «Парфюмер».",
            "Сертификаты от основателя и заводов изготовителей ароматов.",
            "В качестве бонуса - личная консультация от основателя.",
         ],
         url: "https://wa.me/77478602030?text=Здравствуйте, хочу записаться на ваш курс по парфюмерии. Я хотел бы выбрать тариф OFFLINE",
      },
      {
         title: "VIP 1.500.000 тг",
         oldPrice: "2.500.000 тг",
         features: [
            "Обучение 1 месяц.",
            "Обратная связь на уроках и в чате.",
            "Приглашенные топовые спикеры.",
            "Доступ на 6 месяцев на видеоуроки.",
            "Техническая поддержка.",
            "Бизнес ланч.",
            "Вступление в бизнес клуб «Парфюмер».",
            "Сертификаты от основателя и заводов изготовителей ароматов.",
            "В качестве бонуса - личная консультация от основателя.",
            "20 видов ароматов для старта.",
            "Индивидуальное ведение обучение с основателем.",
         ],
         url: "https://wa.me/77478602030?text=Здравствуйте, хочу записаться на ваш курс по парфюмерии. Я хотел бы выбрать тариф VIP",
      },
   ];

   const handlePrev = () => {
      setActiveIndex(
         (prevIndex) => (prevIndex - 1 + prices.length) % prices.length
      );
   };

   const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % prices.length);
   };

   const [isPopupOpen, setIsPopupOpen] = useState(false);

   const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
   };

   return (
      <div id="price">
         <div className="container">
            <h1 id="title">Выберите удобный формат обучения</h1>
            <div className="prices">
               {prices.map((price, index) => (
                  <div
                     className={`price ${
                        index === activeIndex ? "active" : ""
                     }`}
                     key={index}
                  >
                     <div className="content">
                        <div className="sale">
                           <div className="old-price">
                              <h5 id="old-price">
                                 {price.oldPrice}
                                 <img src="images/line.png" alt="" />
                              </h5>
                           </div>
                           <h3 id="new-price">{price.title}</h3>
                        </div>
                        <div className="text">
                           {price.features.map((feature, i) => (
                              <p key={i}>
                                 ({i + 1 < 10 ? `0${i + 1}` : i + 1}) {feature}
                              </p>
                           ))}
                        </div>
                        <div className="calltoaction">
                           {/* <a href={price.url}>Выбрать</a> */}
                           <button id="calltoaction" onClick={togglePopup}>
                              Выбрать{" "}
                              <img src="images/link-icon.png" alt="link icon" />
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className="slider-buttons">
               <button onClick={handlePrev}>
                  <img src="images/previous.png" alt="" />
               </button>
               <button onClick={handleNext}>
                  <img src="images/next.png" alt="" />
               </button>
            </div>
         </div>
         {isPopupOpen && <PopupForm togglePopup={togglePopup} />}
      </div>
   );
};

export default Price;
