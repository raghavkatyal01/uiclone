import React from 'react';

const WorkingProcess = () => {
  return (
    <section className="px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[#B9FF66] text-lg font-bold mb-2">Our Working Process</h2>
        <p className="text-3xl font-semibold max-w-2xl mb-12">
          Steps that define how we achieve success for your business
        </p>

        {/* Steps */}
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-[#F3F3F3] px-6 py-4 rounded-lg border-l-[6px] border-[#B9FF66] shadow-md flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold mb-1">01 Consultation</h3>
              <p className="text-gray-700">
                We start by understanding your business, goals, and audience to create a custom plan.
              </p>
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3094/3094623.png"
              alt="Consultation"
              className="w-12 h-12"
            />
          </div>

          {/* Step 2 */}
          <div className="bg-[#F3F3F3] px-6 py-4 rounded-lg border-l-[6px] border-[#B9FF66] shadow-md flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold mb-1">02 Research and Strategy Development</h3>
              <p className="text-gray-700">
                We research your market and develop a strong strategy tailored to your needs.
              </p>
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4335/4335982.png"
              alt="Strategy"
              className="w-12 h-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
