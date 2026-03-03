import React from 'react';
import './AIInnovation.css';
import Image07 from "../../Images/Image07.jpg";
import Image08 from "../../Images/Image08.jpg";

const AIInnovation = () => {
  return (
    <div className="ai-innovation-wrapper">
      <div className="ai-innovation-container">
        
        {/* Top Section */}
        <header className="ai-innovation-header">
          <h2 className="ai-innovation-main-title">
            Discover the Future of AI Innovation
          </h2>
          <p className="ai-innovation-header-desc">
            With Zynterris, you can build everything from advanced algorithms to simple AI tools. Whether you’re a developer or an entrepreneur, we help you turn ideas into working AI solutions.
          </p>
        </header>

        {/* Content Grid */}
        <div className="ai-innovation-grid">
          
          {/* Large Image - Left Column */}
          <div className="ai-innovation-img-left">
            <img 
              src={Image07} 
              alt="Advanced AI Visualization" 
              loading="lazy" 
            />
          </div>

          {/* Right Column Stack */}
          <div className="ai-innovation-right-column">
            
            <div>
              <div className="ai-innovation-badge-row">
                <span className="ai-innovation-badge ai-innovation-purple">
                  Simplifying AI for Everyone
                </span>
                <span className="ai-innovation-badge ai-innovation-blue">
                  AI Generator Platform
                </span>
              </div>

              <div className="ai-innovation-middle-flex">
                <div>
                  <h3 className="ai-innovation-mid-title">
                    Not An AI Tool. An AI Operating Layer.
                  </h3>
                  <p className="ai-innovation-mid-desc">
                    Zynterris is not another AI app or chatbot. It is an operating layer installed into your organization that powers how work gets done. Once installed, your teams operate with AI assistance across every function of the business
                  </p>
                </div>
                {/* Small Image - Floating Right */}
                <div className="ai-innovation-img-small">
                  <img 
                    src={Image08} 
                    alt="AI Interface Logic" 
                    loading="lazy" 
                  />
                </div>
              </div>
            </div>

            {/* Bottom Card Component */}
            <div className="ai-innovation-stats-card">
              <div className="ai-innovation-card-info">
                <div className="ai-innovation-icon-box">
                  <svg 
                    width="56" 
                    height="56" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                </div>
                
                <div className="ai-innovation-card-text">
                  <h3>
                    Accelerate Your AI Projects 
                  </h3>
                  <p>
                    Design, deploy, and scale AI solutions quickly with our platform.
                  </p>
                </div>
              </div>

              <div className="ai-innovation-stat-box">
                <div className="ai-innovation-number">100%</div>
                <div className="ai-innovation-label">Audit Coverage</div>
              </div>
            </div>

            {/* Who Zynterris Is For Section */}
     
          </div>
        </div>
               <div className="ai-new">
           
             <div className="ai-innovation-target-section">
              <h2 className="ai-innovation-target-heading">Zynterris Serve</h2>
              <div style={{display: "flex", flexDirection: "column" ,gap:"0px"}} className="ai-innovation-target-list">
                <div className="ai-innovation-target-point">
                  <span className="ai-innovation-bullet"></span>
                  <p>AI Strategy</p>
                </div>
                <div className="ai-innovation-target-point">
                  <span className="ai-innovation-bullet"></span>
                  <p> AI Agents</p>
                </div>
                <div className="ai-innovation-target-point">
                  <span className="ai-innovation-bullet"></span>
                  <p>Automation</p>
                </div>
                <div className="ai-innovation-target-point">
                  <span className="ai-innovation-bullet"></span>
                  <p>Integration</p>
                </div>
                 <div className="ai-innovation-target-point">
                  <span className="ai-innovation-bullet"></span>
                  <p>Governance</p>
                </div>
              </div>
            </div>
             <div className="ai-innovation-target-section">
              <h2 className="ai-innovation-target-heading">Who Zynterris Is For</h2>
              <div className="ai-innovation-target-list">
                <div className="ai-innovation-target-point">
                  <span className="ai-innovation-bullet"></span>
                  <p>Companies adopting AI without building an AI team</p>
                </div>
                <div className="ai-innovation-target-point">
                  <span className="ai-innovation-bullet"></span>
                  <p>Organizations buried in manual, repetitive work</p>
                </div>
                <div className="ai-innovation-target-point">
                  <span className="ai-innovation-bullet"></span>
                  <p>Teams scaling speed without hiring more people</p>
                </div>
                <div className="ai-innovation-target-point">
                  <span className="ai-innovation-bullet"></span>
                  <p>Leaders building AI-native operations</p>
                </div>
              </div>
            </div>
</div>
      </div>
    </div>
  );
};

export default AIInnovation;