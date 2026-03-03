import React from 'react';

const PricingGrid = () => {
  const tiers = [
    {
      title: "AI Enablement Starter",
      price: "$3,000",
      period: "/ month",
      subtext: "3-month minimum · $6,000 onboarding",
      description: "Quick AI automation for small teams looking for immediate productivity gains.",
      features: ["Workflow audit", "Up to 3 custom AI agents", "Integration with Workspace/Slack", "One core business function automation", "Team onboarding", "Monthly optimization", "Email support"],
      who: "Small teams (5–15 people) looking for quick wins.",
      cta: "Get Started",
      highlight: false
    },
    {
      title: "Hyper Growth Automation",
      price: "$6,500",
      period: "/ month",
      subtext: "3–6 month commitment · $10,000 onboarding",
      description: "AI systems embedded across teams to support fast, sustainable growth.",
      features: ["Deep operational audit", "Up to 8 custom AI agents", "Automated lead gen & reporting", "Custom AI dashboards", "Live team training", "Bi-weekly ROI reporting", "Priority support"],
      who: "Companies with 15–50 employees ($1M–$10M revenue).",
      cta: "Book a Strategy Call",
      highlight: true
    },
    {
      title: "Enterprise Transformation",
      price: "$12,500 – $18,000",
      period: "/ month",
      subtext: "6–12 month contracts · $20K–$40K onboarding",
      description: "A fully managed AI partnership for organizations treating AI as infrastructure.",
      features: ["Company-wide AI strategy", "Unlimited AI agents", "Custom internal portals", "Dedicated AI strategist", "Weekly strategy calls", "Org-wide adoption programs", "Advanced analytics"],
      who: "50+ employee companies and enterprise operations.",
      cta: "Talk to Sales",
      highlight: false
    }
  ];

  return (
    <div className="zy-grid-wrapper">
      {tiers.map((tier, index) => (
        <div key={index} className={`zy-card ${tier.highlight ? 'zy-card-featured' : ''}`}>
          {tier.highlight && <div className="zy-badge">Most Popular</div>}
          
          <div className="zy-card-top">
            <h3 className="zy-tier-name">{tier.title}</h3>
            <div className="zy-price-box">
              <span className="zy-amount">{tier.price}</span>
              <span className="zy-period">{tier.period}</span>
            </div>
            <p className="zy-onboarding-text">{tier.subtext}</p>
          </div>

          <p className="zy-description">{tier.description}</p>

          <ul className="zy-feature-list">
            {tier.features.map((feat, i) => (
              <li key={i} className="zy-feature-item">
                <span className="zy-check">✓</span> {feat}
              </li>
            ))}
          </ul>

          <div className="zy-audience-box">
            <strong>Who it’s for:</strong> {tier.who}
          </div>

          <button className={`zy-cta-btn ${tier.highlight ? 'zy-btn-solid' : 'zy-btn-outline'}`}>
            {tier.cta}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingGrid;