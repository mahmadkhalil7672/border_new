import React, { useState } from 'react';
// import ReCAPTCHA from "react-google-recaptcha";
import './ContactSection.css';

const ContactSection = () => {
  // State to track if the message has been sent
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const recaptchaRef = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Logic for form submission would go here (e.g., an API call)
    // For now, we simulate a successful submission:
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <section className="ct-ui-wrapper">
      <div className="ct-ui-container">
        <div className="ct-ui-flex-grid">
          
          {/* Sidebar Section */}
          <div className="ct-ui-sidebar">
            <div className="ct-ui-info-card">
              <div className="ct-ui-icon-box"><i className="fas fa-map-marker-alt"></i></div>
              <div className="ct-ui-text-box">
                <h4 className="ct-ui-heading">Office Address</h4>
                <p className="ct-ui-desc">123 california 10022</p>
              </div>
            </div>

            <div className="ct-ui-info-card">
              <div className="ct-ui-icon-box"><i className="fas fa-envelope"></i></div>
              <div className="ct-ui-text-box">
                <h4 className="ct-ui-heading">Email Address</h4>
                <p className="ct-ui-desc">info@zynterris.com</p>
              </div>
            </div>

            <div className="ct-ui-info-card">
              <div className="ct-ui-icon-box"><i className="fas fa-phone-alt"></i></div>
              <div className="ct-ui-text-box">
                <h4 className="ct-ui-heading">Phone Number</h4>
                <p className="ct-ui-desc">+1 234 4544</p>
              </div>
            </div>
          </div>

          {/* Form Section / Success Message */}
          <div className="ct-ui-main-content">
            {isSubmitted ? (
              <div className="ct-ui-success-state">
                <div className="ct-ui-success-icon">
                   <i className="fas fa-check"></i>
                </div>
                <h2 className="ct-ui-success-title">Message Sent!</h2>
                <p className="ct-ui-success-text">
                  Thank you for reaching out. Your message has been received, and our team will get back to you shortly.
                </p>
                <button onClick={handleReset} className="ct-ui-back-btn">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="ct-ui-form">
                <div className="ct-ui-row ct-ui-split">
                  <div className="ct-ui-field-group">
                    <input type="text" placeholder="Your name" className="ct-ui-input" required />
                  </div>
                  <div className="ct-ui-field-group">
                    <input type="email" placeholder="Enter email address" className="ct-ui-input" required />
                  </div>
                </div>

                <div className="ct-ui-row">
                  <input type="text" placeholder="Write your subject" className="ct-ui-input" required />
                </div>

                <div className="ct-ui-row">
                  <textarea placeholder="Write your message" className="ct-ui-input ct-ui-textarea" required></textarea>
                </div>

                {/* <div className="ct-ui-captcha-container">
                  <div className="ct-ui-captcha-scaler">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="YOUR_SITE_KEY"
                    />
                  </div>
                </div> 
                */}

                <button type="submit" className="ct-ui-submit-btn">Send Message</button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;