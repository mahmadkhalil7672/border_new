import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1 className="hero-title">
Your Company <br/> Running on AI.
        </h1>
        
        <p className="hero-description">
Zynterris enables enterprises to deploy compliant, production-ready AI systems with confidence globally
        </p>

        <div className="workflow-wrapper">
          <div className="workflow-text">
            Workflow With <br /> Custom AI Tools
          </div>
          <div className="avatar-group">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100" 
              alt="User 1" 
              className="avatar" 
            />
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100" 
              alt="User 2" 
              className="avatar" 
            />
            <img 
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100" 
              alt="User 3" 
              className="avatar" 
            />
          </div>
          <div className="active-users">
            <span className="user-count">1000+</span>
            <span className="user-label">User Active</span>
          </div>
        </div>

        <div className="hero-actions">
          <button   onClick={() => window.location.href = "tel:+18182823110"}
 className="btn btn-blue" type="button">Install AI Into My Company</button>
          <button className="btn btn-purple" type="button">Book a Free AI Consultation</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="media-box">
          {/* Optimized Video:
              1. poster: Shows an image while video loads
              2. preload="auto": Tells browser to start downloading immediately
          */}
          <video 
            className="hero-video" 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto"
            poster="/Videos/video-thumbnail.jpg" 
          >
            <source src="/Videos/AIVideo.mp4" type="video/mp4" />
          </video>
          <div className="media-overlay-text">
            Discover The Future Of <br /> AI Innovation
          </div>
        </div>

        <div className="glass-card">
          <div className="glass-header">
            <span className="glass-number">25+</span>
            <span className="glass-sub">Years of experience</span>
          </div>
          <div className="chart-container">
            <div className="chart-bar" style={{height: '25px', background: '#DA6CFF'}}></div>
            <div className="chart-bar" style={{height: '33px', background: '#4D55FF'}}></div>
            <div className="chart-bar" style={{height: '28px', background: '#4D55FF'}}></div>
            <div className="chart-bar" style={{height: '38px', background: '#DA6CFF'}}></div>
            <div className="chart-bar" style={{height: '29px', background: '#4D55FF'}}></div>
            <div className="chart-bar" style={{height: '25px', background: '#DA6CFF'}}></div>
          </div>
        </div>

        {/* <div className="tech-stat-box">
          <span className="tech-val">123.4+</span>
          <span className="tech-txt">Technology</span>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;