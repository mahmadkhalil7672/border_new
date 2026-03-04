import React from "react";
import "./term.css";

// Example SVGs (you can replace with your own)
const icons = {
  introduction: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
      <path d="M12 8v4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  services: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  website: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="white" strokeWidth="2" fill="none"/>
      <path d="M2 12h20M12 2v20" stroke="white" strokeWidth="2"/>
    </svg>
  ),
  ip: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
      <path d="M12 2l9 4v12l-9 4-9-4V6l9-4z" stroke="white" strokeWidth="2" fill="none"/>
    </svg>
  ),
  default: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
    </svg>
  )
};

function Terms() {
  const terms = [
    { title: "Introduction", text: "Welcome to Zynterris. By accessing our website, communicating with us, or using any of our services, you agree to be legally bound by these Terms & Conditions. If you do not agree with any part of these terms, please refrain from using our website or services. These terms apply to all visitors, clients, partners, and users of our website.", icon: icons.introduction },
    { title: "Services Overview", text: "Zynterris provides AI enablement consulting, system design, automation strategy, integration support, and related advisory services. All services are delivered based on agreed project scopes, defined timelines, written proposals or contracts, and client-provided requirements and inputs. We do not guarantee specific business outcomes, financial results, or performance improvements unless explicitly stated in a written agreement.", icon: icons.services },
    { title: "Use of Website", text: "By using this website, you agree to use it only for lawful purposes and in a manner that does not damage, disable, overload, or interfere with its functionality. You must not attempt unauthorized access to systems, data, or servers, nor use the website for fraudulent, misleading, or harmful activities. We reserve the right to restrict or terminate access if misuse is detected.", icon: icons.website },
    { title: "Intellectual Property Rights", text: "All content on this website, including text, graphics, visuals, logos, frameworks, methodologies, and branding, is the intellectual property of Zynterris unless otherwise stated. You may not copy, reproduce, republish, redistribute, or use our content, branding, or materials for commercial purposes without prior written permission.", icon: icons.ip },
    { title: "Client Responsibilities", text: "Clients are responsible for providing accurate, complete, and timely information, reviewing deliverables, and providing feedback within agreed timelines. Clients must also ensure internal approvals and compliance where required. Delays caused by missing information, feedback, or approvals may impact delivery timelines.", icon: icons.default },
    { title: "Confidentiality", text: "Any non-public information shared during consultations, projects, or communications will be treated as confidential. Both parties agree not to disclose confidential information to third parties unless disclosure is required by law, explicitly approved in writing, or the information is already publicly available.", icon: icons.default },
    { title: "Limitation of Liability", text: "To the maximum extent permitted by law, Zynterris shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our website or services. We are not responsible for losses caused by reliance on advisory insights alone. Use of our website and services is at your own risk. Our total liability, if any, shall not exceed the fees paid for the specific service provided.", icon: icons.default },
    { title: "Third-Party Links & Tools", text: "Our website may reference or link to third-party websites, tools, or platforms for informational purposes. We are not responsible for their content, accuracy, privacy practices, or any loss or damage caused by their use. Accessing third-party services is entirely at your discretion.", icon: icons.default },
    { title: "Changes to Terms", text: "We reserve the right to update or modify these Terms & Conditions at any time without prior notice. Any changes will be effective once posted on this page. Continued use of the website or services constitutes acceptance of the revised terms.", icon: icons.default },
    { title: "Governing Law", text: "These Terms & Conditions shall be governed by and interpreted in accordance with applicable laws, without regard to conflict-of-law principles.", icon: icons.default },
    { title: "Contact Information", text: "If you have any questions about these Terms & Conditions, please contact us through the official communication channels listed on our website.", icon: icons.default }
  ];

  return (
    <section className="terms-section">
      <div className="terms-header">
        <h1 className="terms-title">Terms & Conditions</h1>
        <p className="terms-subtitle">Please read these terms carefully before using our website or services.</p>
      </div>

      <div className="terms-content">
        {terms.map((item, index) => (
          <div key={index} className="terms-block">
            <div className="terms-block-header">
              <span className="terms-icon">{item.icon}</span>
              <h2>{item.title}</h2>
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Terms;