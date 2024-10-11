import React from "react";const Footer = () => {
   return (
      <div id="footer">
         <div className="container">
            <img id="footer-logo" src="images/footer.png" alt="" />
            <div className="footer">
               <div className="contacts">
                  <p>8 (747)860 20 30</p>
                  {/* <p>firdausacademy@mail.ru</p> */}
                  <p>г. Тараз Абая 103А, 4 этаж 21</p>
               </div>
               <div className="social">
                  <a href="https://www.instagram.com/firdaus.academy/">
                     instagram <img src="images/link.png" alt="" />
                  </a>
                  <a href="https://wa.me/77478602030">
                     whatsapp <img src="images/link.png" alt="" />
                  </a>
                  {/* <a href="#">
                     facebook <img src="images/link.png" alt="" />
                  </a> */}
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
