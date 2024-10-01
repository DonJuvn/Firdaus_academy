import React, { useState } from "react";import PopupForm from "./form"; // Adjust path if needed

const Intro = () => {
   const [isPopupOpen, setIsPopupOpen] = useState(false);

   const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
   };

   return (
      <div id="intro">
         <div className="container">
            <div className="logo">
               <img src="images/logo.png" alt="logo" />
            </div>
            <div className="main">
               <img id="texture1" src="images/rectangle.png" alt="texture" />
               <img id="texture2" src="images/rectangle.png" alt="texture" />
               <img id="texture3" src="images/rectangle.png" alt="texture" />
               <div className="text">
                  <h1>
                     Создайте успешный парфюмерный бизнес и заработайте от{" "}
                     <br />
                     <span>1 000 000</span> тенге в месяц
                  </h1>
                  <p>
                     Научитесь всему, что нужно для старта и развития бизнеса, с
                     нашими экспертами
                  </p>
                  <button id="calltoaction" onClick={togglePopup}>
                     Записаться на курс{" "}
                     <img src="images/link-icon.png" alt="link icon" />
                  </button>
               </div>
               <div className="avatar">
                  <img src="images/avatar.png" alt="avatar" />
               </div>
            </div>
         </div>

         {isPopupOpen && <PopupForm togglePopup={togglePopup} />}
      </div>
   );
};

export default Intro;
