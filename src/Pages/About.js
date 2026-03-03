import React from "react";
import "./about.css";
import image1 from "../Images/Image01.jpg"
function About() {
  return (
    <section className="about-section">

      <div className="about-header">
        <h2 className="about-title">
          Turning AI Ideas Into Working Systems
        </h2>
        <p className="about-subtitle">
          At Zynterris, we help businesses move from AI curiosity to real execution.
          We are not a tool vendor or a buzzword-driven agency. Our focus is simple:
          make AI work inside your operations in a practical, reliable way.
        </p>
      </div>

      <div className="about-content">

        <div className="about-left">
          <p className="about-paragraph">
            We’ve worked with growing companies and enterprise teams to design systems
            that solve real problems, reduce manual work, and improve decision-making.
            Our approach is grounded in clarity, not hype, and in systems that teams
            can actually use.
          </p>

          <p className="about-paragraph">
            Our team combines strategy, engineering, and operations experience.
            We help you plan what makes sense, build what matters, and integrate AI
            in a way that fits how your business already works.
          </p>

          <p className="about-paragraph">
            From internal workflows to customer-facing systems, we ensure everything
            is structured, secure, and maintainable.
          </p>

          <p className="about-paragraph">
            Whether you’re exploring AI for the first time or trying to fix systems
            that never quite worked, Zynterris is here to help. We work with businesses
            across industries and regions, supporting both small teams and large organizations.
          </p>
        </div>

        <div className="about-right">
          <div className="about-media-box">
            <img
              src={image1}
              alt="Clean modern workspace with connected systems and data flows"
              className="about-image"
            />
          </div>

          <div className="about-glass-card">
            <h4 className="about-glass-title">Practical AI</h4>
            <p className="about-glass-text">
              Clean, modern workspace with connected systems and clear data flows,
              representing practical AI working behind the scenes.
            </p>
          </div>
        </div>

      </div>

      <div className="about-cta">
        <p className="about-cta-text">
          Ready to make AI actually useful for your business?
        </p>

        <div className="about-actions">
          <button className="btn btn-blue">Contact Us</button>
          <button className="btn btn-purple">Book a Call</button>
        </div>

        <p className="about-subtitle" style={{ marginTop: "20px" }}>
          Contact Zynterris today for a clear, no-pressure conversation.
          We’re just one call away.
        </p>
      </div>

    </section>
  );
}

export default About;