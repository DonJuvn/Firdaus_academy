import React, { useState } from "react";

const PopupForm = ({ togglePopup }) => {
   const [formData, setFormData] = useState({
      name: "",
      phone: "",
      format: "", // Make sure the default value is an empty string
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      // Check if format is selected
      if (!formData.format) {
         alert("Пожалуйста, выберите формат (Online, Offline, VIP).");
         return; // Prevent submission if format is not selected
      }

      // Prepare the message content
      const message = `Меня зовут ${formData.name}, мой номер ${formData.phone}, я хочу купить ${formData.format} тариф на этот курс`;

      // Encode the message for URL use
      const encodedMessage = encodeURIComponent(message);

      // WhatsApp URL (replace phone number with the recipient's WhatsApp number)
      const whatsappUrl = `https://wa.me/77478602030?text=${encodedMessage}`;

      // Open WhatsApp with the pre-filled message
      window.open(whatsappUrl, "_blank");

      // Reset the form data (optional)
      setFormData({
         name: "",
         phone: "",
         format: "",
      });

      // Close the popup
      togglePopup();
   };

   return (
      <div className="popup-overlay">
         <div className="popup">
            <div className="container">
               <button className="close-btn" onClick={togglePopup}>
                  ✕
               </button>
               <h1>
                  Заполните заявку, и мы свяжемся{" "}
                  <span>с вами в ближайшее время</span>
               </h1>
               <div className="format-buttons">
                  <button
                     className={formData.format === "Online" ? "active" : ""}
                     onClick={() =>
                        setFormData({ ...formData, format: "Online" })
                     }
                  >
                     Online
                  </button>
                  <button
                     className={formData.format === "Offline" ? "active" : ""}
                     onClick={() =>
                        setFormData({ ...formData, format: "Offline" })
                     }
                  >
                     Offline
                  </button>
                  <button
                     className={formData.format === "VIP" ? "active" : ""}
                     onClick={() => setFormData({ ...formData, format: "VIP" })}
                  >
                     VIP
                  </button>
               </div>
               <form onSubmit={handleSubmit}>
                  <input
                     type="text"
                     name="name"
                     placeholder="Ваше имя"
                     value={formData.name}
                     onChange={handleChange}
                     required
                  />
                  <input
                     type="text"
                     name="phone"
                     placeholder="Ваш номер"
                     value={formData.phone}
                     onChange={handleChange}
                     required
                  />
                  <button type="submit" className="submit-btn">
                     Отправить
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default PopupForm;
