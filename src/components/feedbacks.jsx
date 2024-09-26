import React, { useState } from "react";
const FeedBacks = () => {
   // Array of feedbacks
   const feedbacks = [
      {
         name: "Асылбек Арман",
         feedback:
            "Заниматься парфюмерным бизнесом — это удивительное и уникальное путешествие в мир ароматов и эмоций. Когда я только начинал, мне казалось, что создать парфюм — это исключительно творческая работа, но я быстро понял, насколько важно сочетание искусства и науки.",
         postedAt: "16.09.2024| 12:56",
      },
      {
         name: "Мария Иванова",
         feedback:
            "Обучение здесь перевернуло мое представление о профессии. Огромное количество практики помогло сразу приступить к работе.",
         postedAt: "17.09.2024| 13:45",
      },
      {
         name: "Олег Петров",
         feedback:
            "Очень полезный курс! Преподаватели знают своё дело, а атмосфера в классе мотивирует.",
         postedAt: "18.09.2024| 14:20",
      },
   ];

   // State to track the current feedback index
   const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

   // Handler for Next button
   const handleNext = () => {
      setCurrentFeedbackIndex((prevIndex) =>
         prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
      );
   };

   // Handler for Previous button
   const handlePrevious = () => {
      setCurrentFeedbackIndex((prevIndex) =>
         prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
      );
   };

   const { name, feedback, postedAt } = feedbacks[currentFeedbackIndex];

   return (
      <div id="feedbacks">
         <div className="container">
            <div className="feedbacks">
               <h1 id="title">Отзывы наших учеников</h1>
               <div className="slider">
                  <div className="feedback">
                     <p id="name">{name}</p>
                     <p id="feedback">{feedback}</p>
                     <p id="posted-at">{postedAt}</p>
                  </div>
                  <div className="buttons">
                     <img
                        src="images/previous.png"
                        alt="Previous"
                        onClick={handlePrevious}
                     />
                     <img
                        src="images/next.png"
                        alt="Next"
                        onClick={handleNext}
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FeedBacks;
