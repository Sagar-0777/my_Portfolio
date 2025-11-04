import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact(){
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e){
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setStatus('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    }

    setIsSubmitting(false);
    // Clear status after 5 seconds
    setTimeout(() => setStatus(''), 5000);
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-grid">
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="Your name"
                disabled={isSubmitting}
              />
            </label>
            <label>
              Email
              <input 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
            </label>
            <label>
              Message
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                placeholder="Your message here..."
                disabled={isSubmitting}
              />
            </label>
            <button 
              className={`btn ${isSubmitting ? 'submitting' : ''}`} 
              type="submit" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {status && <p className={`status ${status.includes('Failed') ? 'error' : 'success'}`}>{status}</p>}
          </form>
          <aside className="contact-info">
            <h3>Let's work together</h3>
            <p>Find me on <a href="https://github.com/Sagar-0777" target="_blank" rel="noreferrer">GitHub</a> and <a href="https://www.linkedin.com/in/sagar-roy-b061b3288/" target="_blank" rel="noreferrer">LinkedIn</a></p>
          </aside>
        </div>
      </div>
    </section>
  );
}
