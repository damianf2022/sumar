import React, { useEffect } from 'react';
import iconwat from '../images/what_icon.png';
import email_icon from '../images/email_icon.png';
import { Link } from 'react-router-dom';

import { AttentionSeeker } from 'react-awesome-reveal';
import ChatBot from './ChatBot';

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
      right: 20px;
      z-index: 9999;
    }

    .chatbot-icon {
      width: 70px;
      height: 70px;
      border-radius:50%;
      background: none;
      border: 3px solid #cccccc8d;
      box-shadow: 0 4px 8px rgb(255, 255, 255);
  
    }
    .chatbot-icon:hover {
      background-color: rgb(70, 236, 70);

  }
  `;

  return (
    <div>
      {/* <AttentionSeeker effect="shakeX" style="" delay={2000}> */}
      <style>{styles}</style>

      <a href="https://api.whatsapp.com/send/?phone=5493517667501&text&type=phone_number&app_absent=0" className="whatsapp-link">
        <img src={iconwat} alt="WhatsApp" className="whatsapp-icon" />
      </a>
      {/* </AttentionSeeker> */}

      {/* <AttentionSeeker effect="shakeX" style="" delay={3000}> */}
      <style>{styles}</style>
      <a href="mailto:comercialcba@sumarservicios.com.ar " className="email-link">
        <img src={email_icon} alt="Email" className="email-icon" />
      </a>
      {/* </AttentionSeeker> */}
      <Link to="/sumar/chatbot">
        <div className="chatbot-icon">
        </div>
      </Link>
    </div>
  );
};

export default Whatsapp;
