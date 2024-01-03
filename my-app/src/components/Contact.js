import React from 'react';
import './Styles/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="Contact-heading">
        Contact Us

      </div>
      
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
