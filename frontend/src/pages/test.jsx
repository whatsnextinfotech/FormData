import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    text: "Moon Rise Loan helped my wife and I refinance our house and purchase an investment property. Anyone could have done that but what I really liked about her is that she was extremely ethical. She carefully listened to our concerns",
    name: "Alex Dew",
    date: "03 days ago",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Moon Rise Loan helped my wife and I refinance our house and purchase an investment property. Anyone could have done that but what I really liked about her is that she was extremely ethical. She carefully listened to our concerns",
    name: "Alex Dew",
    date: "03 days ago",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Moon Rise Loan helped my wife and I refinance our house and purchase an investment property. Anyone could have done that but what I really liked about her is that she was extremely ethical. She carefully listened to our concerns",
    name: "William John",
    date: "05 days ago",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    text: "Moon Rise Loan gave me confidence and clarity. The team was so helpful throughout the mortgage process. Highly recommend!",
    name: "Sarah Williams",
    date: "07 days ago",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  // ... other testimonials
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0b1003] text-white px-4 md:px-20 py-12 md:py-16 ">
      <div className="container">
      {/* Heading */}
      <div className="mb-8 md:mb-10">
        <h2 className="text-3xl md:text-5xl font-bold">
          We help people to find their <br className="hidden md:block" />
          best and dream house
        </h2>
        <p className="text-[#a0a4a0] mt-3 md:mt-4 max-w-2xl text-sm md:text-base">
          Most people find that mortgage financing is complicated and confusing. <br className="hidden md:block" />
          We help you buy your dream home by simplifying the mortgage.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 w-full md:w-[80%] z-30">
        {[0, 1].map((offset) => {
          const current = testimonials[(index + offset) % testimonials.length];
          return (
            <div
              key={current.name}
              className="bg-[#11180a] p-6 rounded-lg border border-[#2a2e22] w-full md:w-3/4  z-20"
            >
              <p className="italic text-[#e2e3e1] text-sm md:text-base">"{current.text}"</p>
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-[#2a2e22]">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-white">{current.name}</h4>
                  <p className="text-sm text-gray-400">{current.date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrows - Now below cards for all screen sizes */}
      <div className="flex justify-center gap-8 w-full mt-6 ">
        <button 
          onClick={prev} 
          className="bg-[#eef3df] text-black p-3 rounded-full hover:scale-110 transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={next} 
          className="bg-[#eef3df] text-black p-3 rounded-full hover:scale-110 transition"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Right Images - Desktop */}
      <div className="hidden md:flex flex-col items-center gap-6 z-0">
        <div className="absolute right-96 top-20 z-0">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Woman"
            className="h-96 w-48 object-cover rounded-full "
          />
        </div>
        <div className="flex gap-4 absolute right-44 top-80">
          <img
            src="https://randomuser.me/api/portraits/men/77.jpg"
            alt="Man"
            className="h-96 w-48 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Right Images - Mobile */}
      <div className="md:hidden w-full mt-6 flex justify-center gap-4">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Woman"
          className="h-40 w-20 object-cover rounded-full"
        />
        <img
          src="https://randomuser.me/api/portraits/men/77.jpg"
          alt="Man"
          className="h-40 w-20 object-cover rounded-full"
        />
      </div>
      </div>
    </div>
  );
};

export default TestimonialSection;