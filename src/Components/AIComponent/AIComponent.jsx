import React from "react";
import "./AIComponent.css";

const AIHero = () => {
  return (
    <div className="ai-container">
      <h1>What Is AI Enablement?</h1>
      <p
        style={{
          backgroundColor: "#000000",
          maxWidth: "800px",
        }}
      >
        AI Enablement means embedding AI directly into how your company
        operates. Zynterris deploys AI agents, automation, and internal
        intelligence across your workflows—so teams work faster, smarter, and
        with less manual effort. No AI team. No complex tools.
      </p>
      {/* Page Title */}
      <h2 className="ai-main-title">
        Revolutionize Your Workflow <br />
        with Zynterris
      </h2>

      {/* Main Feature Card */}
      <div className="ai-card">
        {/* Background Video Layer 
          1. preload="metadata": Only loads the video length/size info first.
          2. poster: Displays an image instantly so the card isn't empty while loading.
        */}
        <video
          className="ai-card-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/Videos/AIVideo02-poster.jpg"
        >
          {/* Use the absolute path from the public folder */}
          <source src="/Videos/AIVideo02.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Layer */}
        <div
          className="ai-card-top"
          style={{ position: "relative", zIndex: 2 }}
        >
          <h2 className="ai-card-title">Build Smarter with AI Generators</h2>

          <div className="ai-badge-group">
            <div className="ai-badge">Simplifying AI for Everyone</div>
            <div className="ai-badge">Creations with AI-Driven Technology</div>
          </div>
        </div>

        <div
          className="ai-card-bottom"
          style={{ position: "relative", zIndex: 2 }}
        >
          <h3 className="ai-description">Build Smarter with AI Generators</h3>

          <div className="ai-stats-container">
            <span className="ai-stat-number">57.42+</span>
            <p className="ai-stat-label">Build Smarter with AI Generators</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIHero;
