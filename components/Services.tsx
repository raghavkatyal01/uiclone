import React from 'react';

const Services = () => {
  return (
    <section id="services" className="px-6 py-16 bg-[#F3F3F3]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#B9FF66] text-lg font-bold mb-2">Services</h2>
        <p className="text-3xl font-semibold max-w-2xl mb-12">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-[6px] border-[#B9FF66] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-3">Search engine optimization</h3>
              <p className="text-gray-700 mb-6">
                Boost your online visibility and drive more traffic to your site with our expert SEO services.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button className="text-sm font-medium underline">Learn more</button>
              <img
                src="https://cdn-icons-png.flaticon.com/512/591/591576.png"
                alt="SEO"
                className="w-12 h-12"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#B9FF66] p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-3">Pay-per-click advertising</h3>
              <p className="text-gray-900 mb-6">
                Reach your target audience quickly and effectively with our PPC advertising strategies.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button className="text-sm font-medium underline">Learn more</button>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2166/2166846.png"
                alt="PPC"
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
