import React, { useState } from "react";
const QA = () => {
   // Array of answers (you can adjust these to match your data)
   const answers = [
      "Для начала парфюмерного бизнеса необходимо провести исследование рынка, определить целевую аудиторию, разработать уникальную концепцию и ароматы. Важно найти поставщиков сырья, лабораторию для производства проб, а затем создать бренд и начать продвижение продукта.",
      "Основные документы включают регистрацию ИП или ООО, получение сертификатов качества и соответствия для продукции, лицензию на производство и продажу парфюмерии (если требуется), а также санитарные разрешения.",
      "Для разработки собственного аромата можно обратиться в парфюмерную лабораторию или работать с профессиональным парфюмером. Процесс включает выбор основных и дополнительных нот аромата, создание пробных вариантов, тестирование и доработку до получения желаемого результата.",
      "Стоимость запуска зависит от масштаба бизнеса. На малом уровне (создание небольших партий ароматов) это может обойтись от $10,000 до $50,000. Включены затраты на сырье, производство, сертификацию, упаковку и маркетинг. Более крупные проекты могут стоить значительно больше.",
   ];

   // State to track which answer is visible
   const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null);

   // Toggle visibility of the answer for the clicked question
   const toggleAnswer = (index) => {
      setVisibleAnswerIndex(visibleAnswerIndex === index ? null : index);
   };

   return (
      <div id="qa">
         <div className="container">
            <div className="foryou">
               <h1 id="title">Этот курс для вас, если...</h1>
               <div className="text">
                  {answers.map((answer, index) => (
                     <div className="item" key={index}>
                        <h4 onClick={() => toggleAnswer(index)}>
                           {index === 0 && <>Как начать парфюмерный бизнес?</>}
                           {index === 1 && (
                              <>
                                 Какие документы необходимы для открытия
                                 парфюмерного бизнеса?
                              </>
                           )}
                           {index === 2 && (
                              <>Как разработать собственный аромат?</>
                           )}
                           {index === 3 && (
                              <>Сколько стоит начать парфюмерный бизнес?</>
                           )}
                        </h4>
                        <img src="images/link-icon-white.png" alt="" />
                        {/* Show answer only if visibleAnswerIndex matches the current index */}
                        {visibleAnswerIndex === index && (
                           <p id="answer">{answer}</p>
                        )}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default QA;
