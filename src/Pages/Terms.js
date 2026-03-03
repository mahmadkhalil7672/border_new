import React from "react";
import "./term.css";

function Terms() {
  return (
    <section className="terms-section">

      <div className="terms-header">
        <h1 className="terms-title">Terms & Conditions</h1>
        <p className="terms-subtitle">
          Please read these terms carefully before using our website or services.
        </p>
      </div>

      <div className="terms-content">

        <div className="terms-block">
          <h2>Introduction</h2>
          <p>
            Welcome to Zynterris. By accessing or using our website and services,
            you agree to comply with and be bound by the following Terms & Conditions.
            If you do not agree with these terms, please do not use our website or services.
          </p>
        </div>

        <div className="terms-block">
          <h2>Services</h2>
          <p>
            Zynterris provides AI enablement consulting, system design, and related
            advisory services. All services are provided based on agreed scopes,
            timelines, and requirements discussed with clients.
          </p>
        </div>

        <div className="terms-block">
          <h2>Use of Website</h2>
          <p>
            You agree to use this website only for lawful purposes. You must not
            attempt to disrupt, misuse, or harm the website, its content, or its functionality.
          </p>
        </div>

        <div className="terms-block">
          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, visuals, logos, and materials,
            is the property of Zynterris unless stated otherwise. You may not copy,
            reproduce, or distribute any content without prior written permission.
          </p>
        </div>

        <div className="terms-block">
          <h2>Limitation of Liability</h2>
          <p>
            Zynterris is not responsible for any direct or indirect damages resulting
            from the use or inability to use our website or services.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Terms;