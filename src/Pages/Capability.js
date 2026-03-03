import React from "react";
import "./capabilities.css";

const CapabilityCard = ({ title, subtitle, points, icon }) => {
  return (
    <div className="cap-card">
      <div className="cap-icon">{icon}</div>

      <h3 className="cap-title">{title}</h3>
      <p className="cap-subtitle">{subtitle}</p>

      <ul className="cap-list">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <a href="#" className="cap-link">
        Learn More →
      </a>
    </div>
  );
};

function Capabilities() {
  return (
    <section className="cap-section">

      <div className="cap-header">
        <h2 className="cap-main-title">
          Enterprise AI Capabilities
        </h2>
        <p className="cap-main-subtitle">
          Built With Governance. Zynterris delivers structured AI systems designed 
          for security, compliance, and measurable business outcomes.
        </p>

        <div className="cap-actions">
          <button className="btn btn-blue">Explore Z OS</button>
          <button className="btn btn-purple">Request Architecture Brief</button>
        </div>
      </div>

      <div className="cap-grid">

        <CapabilityCard
          title="Automate"
          subtitle="Governed AI Execution"
          points={[
            "Replaces repetitive workflows",
            "Built in oversight and KPI tracking",
            "Continuous, measurable execution"
          ]}
          icon={
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3d44ff" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 12h8M12 8v8"/>
            </svg>
          }
        />

        <CapabilityCard
          title="Govern"
          subtitle="Compliance and AI Oversight"
          points={[
            "Monitors AI activity in real time",
            "Audit ready documentation and logs",
            "Aligns with policies and regulations"
          ]}
          icon={
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#da6cff" strokeWidth="2">
              <path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7l8-4z"/>
            </svg>
          }
        />

        <CapabilityCard
          title="Pulse"
          subtitle="Customer Intelligence Engine"
          points={[
            "Transforms data into revenue insights",
            "Identifies churn risk and opportunities",
            "Drives customer growth strategies"
          ]}
          icon={
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3d44ff" strokeWidth="2">
              <polyline points="3 12 7 12 10 5 14 19 17 12 21 12"/>
            </svg>
          }
        />

        <CapabilityCard
          title="Shield"
          subtitle="AI Security and Risk Protection"
          points={[
            "Protects against prompt injections",
            "Mitigates data leaks and model attacks",
            "Secures enterprise AI environments"
          ]}
          icon={
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#da6cff" strokeWidth="2">
              <path d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4z"/>
            </svg>
          }
        />

        <CapabilityCard
          title="Fabric"
          subtitle="Data Foundation for AI"
          points={[
            "Prepares your data for AI readiness",
            "Enforces security and privacy controls",
            "Structures retrieval and access"
          ]}
          icon={
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3d44ff" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
            </svg>
          }
        />

        <CapabilityCard
          title="Scale"
          subtitle="Deployment and Enterprise Expansion"
          points={[
            "Production grade AI deployment",
            "Multi region infrastructure support",
            "Enterprise scalability architecture"
          ]}
          icon={
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#da6cff" strokeWidth="2">
              <path d="M3 3h18v18H3z"/>
              <path d="M3 9h18M9 21V9"/>
            </svg>
          }
        />

      </div>

    </section>
  );
}

export default Capabilities;