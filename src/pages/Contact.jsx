import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with real submission logic
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Header */}
      <section
        className="py-5 text-center"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="container">
          <h1 className="section-title">
            <span className="highlight-yellow">Contact</span>{' '}
            <span className="highlight-teal">Us</span>
          </h1>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section
        className="py-5"
        style={{ backgroundColor: '#F9FAFB' }}
      >
        <div className="container">
          <div className="row gx-5">
            {/* Form Column */}
            <div className="col-md-7 mb-4 mb-md-0">
              <h3 className="section-title mb-4">Get in Touch</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-contact px-4 py-2"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info Column */}
            <div className="col-md-5">
              <h3 className="section-title mb-4">Contact Info</h3>
              <p style={{ fontSize: '1rem', color: '#231F20' }}>
                <FaMapMarkerAlt className="me-2" />
                123 Main Street, Brandon, MB
              </p>
              <p style={{ fontSize: '1rem', color: '#231F20' }}>
                <FaEnvelope className="me-2" />
                info@oneatatimerescue.ca
              </p>
              <p style={{ fontSize: '1rem', color: '#231F20' }}>
                <FaPhone className="me-2" />
                (204) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};