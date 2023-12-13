import React from 'react';
import iconwat from '../images/what_icon.png';
import email_icon from '../images/email_icon.png';
import Stack from 'react-stackai';

const Whatsapp = () => {
  const styles = `
    .whatsapp-link {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
    }

    .whatsapp-icon {
      width: 70px;
      height: 70px;
      border-radius:50%;
      background: none;
      border: 3px solid #cccccc8d;
      box-shadow: 0 4px 8px rgb(255, 255, 255);
    }

    .email-link {
      position: fixed;
      bottom: 20px;
      left: 20px;
      z-index: 9999;
    }
    .email-icon {
      width: 70px;
      height: 70px;
      border: none;
      border-radius:50%;
      background: none;
      border: 3px solid #cccccc8d;
      box-shadow: 0 4px 8px rgb(255, 255, 255);
    }
    .email-icon:hover {
        background-color: rgb(106, 177, 225);
    }
    .whatsapp-icon:hover {
        background-color: rgb(70, 236, 70);
    }
    .chatbot-link {
      position: fixed;
      bottom: 20px;
      left: calc(2px - 200px); /* Resta 200 px a la posición original */
      z-index: 9999;
    }

    .chatbot-icon {
      width: 370px;
      height: 370px;
      border-radius:50%;
      background: none;
      border: 3px solid #cccccc8d;
      box-shadow: 0 4px 8px rgb(255, 255, 255);
    }
    .chatbot-icon:hover {
      /* Agrega estilos adicionales al hover si es necesario */
    }
  `;

  return (
    <div>
      <style>{styles}</style>

      <a href="https://api.whatsapp.com/send/?phone=5493517667501&text&type=phone_number&app_absent=0" className="whatsapp-link">
        <img src={iconwat} alt="WhatsApp" className="whatsapp-icon" />
      </a>

      <a href="mailto:comercialcba@sumarservicios.com.ar " className="email-link">
        <img src={email_icon} alt="Email" className="email-icon" />
      </a>

      {/* <div className="chatbot-link">
        <Stack project="https://www.stack-ai.com/embed/79b1afa1-e824-4774-9ed8-171e87244404/02c2a5e4-d9b7-4590-b6f8-9928c4f56d5a/6579e625af130d25d522940f" className="chatbot-icon" />
      </div> */}
    </div>
  );
};

export default Whatsapp;
