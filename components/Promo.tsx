import React from 'react';

const Promo = () => {
  return (
    <section className="px-6 lg:px-10 pb-24 max-w-[1800px] mx-auto">
      <div className="rounded-3xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[400px] shadow-2xl dark:shadow-none">
        {/* Left Half */}
        <div className="bg-[#F5F5DC] p-10 md:p-16 flex-1 flex flex-col justify-center items-start">
          <span className="text-[#5D4037] font-bold tracking-widest text-xs uppercase mb-4">Premium Access</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2A2A2A] mb-6 leading-tight">
            Unlock Unlimited Power.
          </h2>
          <p className="text-[#4a4a4a] mb-8 max-w-md text-lg">
            Get higher file size limits, faster processing speeds, and priority access to new AI models.
          </p>
          <button className="bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-colors shadow-lg">
            Get Premium
          </button>
        </div>

        {/* Right Half - Decorative Block */}
        <div className="bg-[#5D4037] flex-1 h-64 md:h-auto relative overflow-hidden">
           {/* Abstract decorative circles to make it look designed but minimal */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-[30px] border-[#6D4C41] opacity-50"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#8D6E63] opacity-50 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Promo;