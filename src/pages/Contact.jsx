import React, { useState } from 'react';
import '../contact.css';
import { FaInstagram, FaFacebookF, FaWhatsappSquare, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(`❌ ${data.error}`);
      }
    } catch (error) {
      setStatus('❌ Something went wrong. Please try again later.');
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>Trendy women, We'd love to hear from you! Reach out for inquiries, collaborations, or just to say hi.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required/>
          </label>

          <label>
            Email:
            <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required/>
          </label>

          <label>
            Message:
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
          </label>

          <button type="submit">Send Message</button>
          {status && <p>{status}</p>}
        </form>

        <div className="contact-info">  
          <p><FaPhone /> <a href="tel:+2348160983271">+234 816 098 3271</a></p>
          <p><FaEnvelope /> <a href="mailto:Ellatrends2@gmail.com">Ellatrends2@gmail.com</a></p>

          <div className="social-links">
            <a href="https://www.instagram.com/ellatrends_" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/ellatrends" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://t.co/PMlelyLoMs" target="_blank" rel="noopener noreferrer"><FaWhatsappSquare /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
