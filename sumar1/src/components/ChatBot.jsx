import React, { useState, useEffect } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  // Función para enviar la pregunta al modelo
  async function query(data) {
    const response = await fetch(
      "https://www.stack-inference.com/run_deployed_flow?flow_id=6579e625af130d25d522940f&org=79b1afa1-e824-4774-9ed8-171e87244404",
      {
        headers: {
          'Authorization': 'Bearer 02c2a5e4-d9b7-4590-b6f8-9928c4f56d5a',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result.output;
  }

  // Función para enviar un mensaje del usuario y obtener la respuesta del modelo
  async function sendMessage(message) {
    try {
      setIsSending(true);

      const userMessage = { text: message, type: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      const response = await query({ "in-0": message, "user_id": "<USER or Conversation ID>" });

      const botMessage = { text: response, type: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } finally {
      setIsSending(false);
    }
  }

  useEffect(() => {
    // Envía un mensaje inicial solo si el array de mensajes está vacío y no está enviando actualmente un mensaje
    if (messages.length === 0 && !isSending) {
      sendMessage("Hola, ¿en qué puedo ayudarte?");
    }
  }, [messages, isSending]);

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '' && !isSending) {
      sendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div>
      <div style={{ border: '1px solid #ccc', padding: '10px', maxHeight: '300px', overflowY: 'auto' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '8px', color: message.type === 'user' ? 'blue' : 'green' }}>
            {message.text}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '10px' }}>
        <input type="text" value={inputMessage} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
}

export default Chatbot;
