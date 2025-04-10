import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WorkingProcess from './components/WorkingProcess';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans text-[#191A23]">
      <Header />
      <Hero />
      <Services />
      <WorkingProcess />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
