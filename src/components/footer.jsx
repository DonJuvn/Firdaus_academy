import React from "react";const Footer = () => {
   return (
      <div id="footer">
         <div className="container">
            <img id="footer-logo" src="images/footer.png" alt="" />
            <div className="footer">
               <div className="contacts">
                  <p>8 (707) 569 55 88</p>
                  <p>firdausacademy@mail.ru</p>
                  <p>г. Тараз Қазыбек би 189/2</p>
               </div>
               <div className="social">
                  <a href="#">
                     instagram <img src="images/link.png" alt="" />
                  </a>
                  <a href="#">
                     whatsapp <img src="images/link.png" alt="" />
                  </a>
                  <a href="#">
                     facebook <img src="images/link.png" alt="" />
                  </a>
               </div>
               <p id="right">
                  Политика конфиденциальности условия использования.
               </p>
            </div>
         </div>
      </div>
   );
};

export default Footer;
