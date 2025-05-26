import React from 'react';
import './ContactUsPage.css';

const ContactUsPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Basic form submission feedback
    alert('Form submitted! (This is a placeholder, no data is actually sent)');
    // Here you would typically handle form data, e.g., send it to a backend
  };

  return (
    <div className="contactuspage">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      <div id="map-placeholder">
        <p>Google Maps will be here</p>
      </div>
    </div>
  );
};

export default ContactUsPage;
