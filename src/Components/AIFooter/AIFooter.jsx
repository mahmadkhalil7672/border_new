import React from "react";
import "./AIFooter.css";
import Logo from "../../Images/Logo.png";
import { Link, useNavigate } from "react-router-dom";

const AIFooter = () => {
    const navigate = useNavigate();

  return (
    <footer className="ai-footer-wrapper">
      <div className="ai-footer-container">
        {/* Top Navigation Grid */}
        <div className="ai-footer-top">
          <div className="ai-footer-brand">

      <div className="navbar-logo">
        <Link to="/">
          <img src={Logo} alt="Bodar Logo" className="logo-img" />
        </Link>
      </div>            <p>
              Zynterris helps businesses build and deploy AI solutions with
              confidence.
            </p>
          </div>

          <div className="ai-footer-col">
            <h4>Industries We Serve</h4>
            <ul>
              <li>
                <a href="/">Technology & SaaS</a>
              </li>
              <li>
                <a href="/">E-commerce & Retail</a>
              </li>
              <li>
                <a href="/">Finance & Professional Services</a>
              </li>
               <li>
                <a href="/">Healthcare & Life Sciences</a>
              </li>
               <li>
                <a href="/">Manufacturing & Logistics</a>
              </li>
              <li>
                <a href="/">Marketing & Sales Teams</a>
              </li>
               <li>
                <a href="/">Enterprises & Growing Businesses</a>
              </li>
            </ul>
          </div>

          <div className="ai-footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="about">About</a>
              </li>
              <li>
                <a href="contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="ai-footer-col ai-footer-address">
            <h4>Office Location</h4>
            <p>info@zynterris.com</p>
                        <p>+1 (818) 282-3110</p>

          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="ai-footer-bottom">
          <div className="ai-footer-legal">
            <a style={{cursor:"pointer"}} onClick={() => { navigate('/term');}} >Terms</a>
            <a  style={{cursor:"pointer"}} onClick={() => { navigate('/term');}} >Privacy</a>
          </div>

          <div className="ai-footer-copyright">
            © 2026 By Zynterris. All Rights Reserved
          </div>
          <div className="ai-footer-socials">
            {/* Facebook */}
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="ai-footer-social-icon"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="ai-footer-social-icon"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="ai-footer-social-icon"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AIFooter;
