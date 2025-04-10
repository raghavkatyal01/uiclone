import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="px-6 py-16 md:flex justify-between items-center max-w-7xl mx-auto">
      
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Navigating the digital landscape for success
        </h1>
        <p className="text-gray-700 mb-8">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and more.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded text-sm">
          Book a consultation
        </button>

        
        <div className="flex flex-wrap gap-4 mt-10 opacity-60">
          {['amazon', 'dribbble', 'hubspot', 'notion', 'zoom'].map((brand) => (
            <span key={brand} className="text-sm uppercase tracking-wide">
              {brand}
            </span>
          ))}
        </div>
      </div>

      
      <div className="mt-10 md:mt-0">
        <img
          src="https://cdn-icons-png.flaticon.com/512/9996/9996551.png"
          alt="Illustration"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
