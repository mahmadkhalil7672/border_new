import React from 'react';
import './AIIdeas.css';

// Importing your images
import Image01 from "../../Images/Image01.jpg";
import Image02 from "../../Images/Image02.jpg";
import Image03 from "../../Images/Image03.jpg";
import Image04 from "../../Images/Image04.jpg";
import { useNavigate } from 'react-router-dom';

const AIIdeas = () => {
    const navigate = useNavigate();
  
  // Create an array of the imported images
  const cardImages = [Image01, Image02, Image03, Image04];

  return (
    <>
    <section className="ai-ideas-wrapper">
      <div className="ai-ideas-container">
        
        {/* Header Text */}
         <div className="ai-ideas-header">
       
 <div style={{justifyContent:"center"}} className="ai-innovation-badge-row">
                <span onClick={() => { navigate('/contact');}} style={{padding:"15px 25px",cursor:"pointer"}} className="ai-innovation-badge ai-innovation-purple">
Call Us Today!
                </span>
               
              </div>
                <div className="ai-innovation-target-point">

                  <p>Zynterris helps businesses turn AI ideas into real, working systems. No buzzwords, just practical solutions that fit your operations. One call is all it takes to get started.</p>
</div>
        </div>
        <div className="ai-ideas-header">
          <h2 className="ai-ideas-title">
Turn Ideas into Action with Zynterris
          </h2>
        </div>

        {/* Staggered Card Grid */}
        <div className="ai-ideas-grid">
          {cardImages.map((imgSrc, index) => (
            <div 
              key={index} 
              className="ai-ideas-card" 
              role="img" 
onClick={() => {
  navigate(
    index === 0
      ? "/about"
      : index === 1
      ? "/pricing"
      : index === 2
      ? "/faqs"
      : index === 3
      ? "/capabilities"
      : "/"
  );
}}              aria-label={`Showcase item ${index + 1}`}
              style={{ 
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          ))}
        </div>
 
      </div>
    
    </section>
      <div style={{justifyContent:"center"}} className="ai-innovation-badge-row">
             <span
  onClick={() => window.location.href = "tel:+18182823110"}
  style={{ color: "#fff", padding: "15px 25px", cursor: "pointer" }}
  className="ai-innovation-badge ai-innovation-blue"
>
  Contact Us
</span>
               
              </div>
    </>
  );
};

export default AIIdeas;