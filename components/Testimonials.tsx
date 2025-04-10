import React from 'react';

const testimonials = [
  {
    quote: "This has been one of the best digital experiences I’ve had. Their team is responsive and super creative!",
    name: "Amy Smith",
    title: "Marketing Director, XYZ Corp",
  },
  {
    quote: "We’ve been working with Positivus for the last 3 years. Their expertise in digital marketing is unmatched.",
    name: "John Doe",
    title: "CEO, StartupHub",
  },
  {
    quote: "Their SEO and PPC strategies delivered amazing results for our business. Highly recommend!",
    name: "Julie Brown",
    title: "Founder, Eco Goods",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonals"className="bg-[#191A23] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#B9FF66] text-lg font-bold mb-8">Testimonials</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#292A32] p-6 rounded-xl shadow-md flex flex-col justify-between"
            >
              <p className="text-base mb-6 leading-relaxed">&quot;{item.quote}&quot;</p>
              <div>
                <h4 className="text-[#B9FF66] font-semibold">{item.name}</h4>
                <p className="text-sm">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`h-2 w-2 rounded-full ${
                idx === 0 ? 'bg-[#B9FF66]' : 'bg-white opacity-40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
