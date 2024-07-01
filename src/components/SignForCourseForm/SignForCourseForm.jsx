import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import "./signForCourseForm.scss";

const token = import.meta.env.VITE_APP_TELEGRAM_BOT_TOKEN;
const chat_id = import.meta.env.VITE_APP_TELEGRAM_CHAT_ID;


const SignForCourseForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    return phone.length >= 10;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      setMessage("Name is required");
      return;
    }

    if (!email || !validateEmail(email)) {
      setMessage("Valid email is required");
      return;
    }

    if (!phone || !validatePhone(phone)) {
      setMessage("Valid phone number is required");
      return;
    }

    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const telegramMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: telegramMessage
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        setMessage('Success: Data sent successfully');
      } else {
        setMessage('Error: Failed to send data');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      setMessage('Error: Failed to send data');
    });
  };

  return (
    <div className="form-container">
  
      <form className="sign-form" onSubmit={handleSubmit}>
        <h5>Запишитесь <span className="accent-word">бесплатно</span> <br/>
        и получите подарок</h5>
        {message && <div className="form-message">{message}</div>}
        <div className="form-group">
          <input
            type="text"
            placeholder="Ваше имя и фамилия"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="name-input"
          />
        </div>
        <div className="form-group">
          <PhoneInput
            country={"eg"}
            placeholder="Ваш номер телефона"
            enableSearch={true}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            inputClass="phone-input"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Ваш email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
                 className="email-input"
          />
        </div>
        <div className="form-group">
          <button type="submit">Записаться бесплатно</button>
        </div>
        <p className="accept-policy">Нажимая на кнопку я согашаюсь <br/>
        <span> с политикой конфидециальности</span></p>
      </form>
 
    </div>
  );
};

export default SignForCourseForm;
