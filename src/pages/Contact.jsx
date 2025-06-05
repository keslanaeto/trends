import React from 'react';
import '../contact.css'
import { FaInstagram, FaFacebookF, FaWhatsappSquare, FaPhone, FaEnvelope } from 'react-icons/fa';



const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p> Trendy women, We'd love to hear from you! Reach out for inquiries, collaborations, or just to say hi.</p>

        <form className="contact-form">
          <label>
            Name:
            <input type="text" placeholder="Your Name" />
          </label>

          <label>
            Email:
            <input type="email" placeholder="Your Email" />
          </label>

          <label>
            Message:
            <textarea placeholder="Your Message"></textarea>
          </label>
          

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">  

                <p>               
                  <FaPhone />{' '} <a href="tel:+2348160983271">+234 816 098 3271</a>
                </p>

          <p>
            <FaEnvelope />{' '}
            <a href="Ellatrends2@gmail.com">Ellatrends2@gmail.com</a>
          </p>
         

          <div className="social-links">
            <a href="https://www.instagram.com/ellatrends_?igsh=MTB6dGg2cGxldjEzbQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/ellatrends" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://t.co/PMlelyLoMs" target="_blank" rel="noopener noreferrer"><FaWhatsappSquare /></a>
          </div>
        </div>
      </div>
    </section>
  );
  };

export default Contact;
