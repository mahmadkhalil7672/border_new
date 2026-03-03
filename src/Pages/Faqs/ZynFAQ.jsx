import React, { useState } from 'react';
import './ZynFAQ.css';

const ZynFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What does the onboarding fee cover?",
      answer: "It covers workflow analysis, AI system design, integrations, and initial automation setup."
    },
    {
      question: "Why is there a minimum contract period?",
      answer: "AI systems need time to deploy, optimize, and deliver measurable results."
    },
    {
      question: "What is an AI agent?",
      answer: "An AI agent is a digital worker that automates specific tasks like leads, reports, or support."
    },
    {
      question: "Can Zynterris work with our existing tools?",
      answer: "Yes. We integrate with tools you already use such as Google Workspace, Slack, CRMs, and Notion."
    },
    {
      question: "How is ROI measured?",
      answer: "We track time saved, tasks automated, and operational efficiency improvements."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="zyn-faq-section">
      <div className="zyn-faq-wrapper">
        <h2 className="zyn-faq-heading">Frequently Asked Questions</h2>
        <div className="zyn-faq-accordion">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`zyn-faq-item ${activeIndex === index ? 'zyn-is-open' : ''}`}
            >
              <button 
                className="zyn-faq-trigger" 
                onClick={() => toggleFAQ(index)}
              >
                <span className="zyn-faq-q-text">{faq.question}</span>
                <span className="zyn-faq-icon-box">
                  <span className="zyn-faq-icon-line"></span>
                  <span className="zyn-faq-icon-line zyn-icon-vert"></span>
                </span>
              </button>
              <div className="zyn-faq-content">
                <div className="zyn-faq-inner">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZynFAQ;