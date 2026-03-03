import React from 'react';
import './VisionPartner.css';
import Image05 from "../../Images/Image05.jpg";
import Image06 from "../../Images/Image06.jpg";

const VisionPartner = () => {
  return (
    <section className="vsn-wrapper">
      {/* Top Section */}
      <div className="vsn-header-row">
        <h1 className="vsn-hero-text">
          How Zynterris Installs AI Into Your Company
        </h1>
      </div>

      <div className="vsn-main-grid">
        {/* Left Column */}
        <div className="vsn-left-content">
          <div className='abcdedf'>
            <h2 className="vsn-workflow-title">AI Agents</h2>
            <p className="vsn-muted-desc">
Custom AI agents perform tasks across departments including operations, marketing, support, data analysis, and intern al coordination.

            </p>
            
            {/* Image added inside vsn-box-small */}
            <div className="vsn-box-small">
              <img src={Image05} alt="AI Workflow" className="vsn-box-img" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="vsn-right-visual">
          {/* Top Floating Card */}
          <div className="vsn-glass-overlay vsn-glass-top">
            <span className="vsn-dot-indicator" style={{backgroundColor: '#ce00ff'}}></span>
            <div>
              <h3 className="vsn-card-h3">AI Workflow Automation</h3>
              <p className="vsn-card-p">Manual processes are replaced with intelligent AI driven workflows that operate continuously without human intervention.
</p>
            </div>
          </div>

          {/* Middle Floating Info */}
          <div className="vsn-middle-tag">
            <div className="vsn-white-dot"></div>
            <div>
              <h3 className="vsn-card-h3" style={{margin: 0}}>AI Knowledge System
</h3>
              <p className="vsn-card-p">All of your company knowledge becomes searchable, usable, and actionable through AI so teams never waste time looking for information.
</p>
            </div>
          </div>

          <div className="vsn-box-large">
            <img src={Image06} alt="AI Workflow" className="vsn-box-img" />
          </div>

          {/* Bottom Floating Card */}
          <div className="vsn-glass-overlay vsn-glass-bottom">
            <span className="vsn-dot-indicator" style={{backgroundColor: '#3c2aff'}}></span>
            <div>
              <h3 className="vsn-card-h3">AI Integrations
</h3>
              <p className="vsn-card-p">Zynterris connects AI directly into your existing tools, software, and systems so everything works together seamlessly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Branding Area */}
      <div className="vsn-footer-row">
        <div className="vsn-stat-block">
          <h4>25+</h4>
          <p>years of experience</p>
        </div>
        <div>
          <h2 className="vsn-innovation-text">Discover The Future Of AI Innovation</h2>
        </div>
      </div>
      
      <div className="vsn-actions">
        <a href='home' className="vsn-btn vsn-btn-blue" >Read More <span>→</span></a>
        <a href='home' className="vsn-btn vsn-btn-purple">Learn More <span>→</span></a>
      </div>
    </section>
  );
};

export default VisionPartner;