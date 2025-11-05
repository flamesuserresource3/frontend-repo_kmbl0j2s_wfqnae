import React from 'react';
import Hero from './components/Hero';
import FeatureCluster from './components/FeatureCluster';
import ProductShowcase from './components/ProductShowcase';
import CTAFooter from './components/CTAFooter';

function App() {
  return (
    <div className="min-h-screen bg-black font-inter text-white">
      <Hero />
      <FeatureCluster />
      <ProductShowcase />
      <CTAFooter />
    </div>
  );
}

export default App;
