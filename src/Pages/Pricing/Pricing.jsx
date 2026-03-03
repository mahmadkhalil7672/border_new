import React from 'react';
import './PricingStyles.css'; // Import the styles here
import PricingHeader from './PricingHeader';
import PricingGrid from './PricingGrid';

function Pricing() {
  return (
    <div className="zy-pricing-page-root">
      <PricingHeader />
      <PricingGrid />
    </div>
  );
}

export default Pricing;