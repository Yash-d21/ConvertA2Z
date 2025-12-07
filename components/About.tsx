import React from 'react';
import { Users, Rocket, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-10 max-w-[1400px] mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 transition-colors">About Tars Networks</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto transition-colors">
          We are a team of skilled innovators dedicated to simplifying digital workflows through advanced technology and intuitive design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="bg-white dark:bg-[#141414] p-8 md:p-12 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none transition-colors">
           <h2 className="text-2xl font-bold text-black dark:text-white mb-4 flex items-center gap-2">
             <Rocket className="text-purple-600 dark:text-purple-500" />
             Our Mission
           </h2>
           <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
             At Tars Networks, we believe in the power of efficiency. Our goal is to provide accessible, high-performance tools that empower users to convert, edit, and create without boundaries.
           </p>
        </div>
        <div className="bg-white dark:bg-[#141414] p-8 md:p-12 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none transition-colors">
           <h2 className="text-2xl font-bold text-black dark:text-white mb-4 flex items-center gap-2">
             <Shield className="text-green-600 dark:text-green-500" />
             Our Values
           </h2>
           <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
             Security, speed, and simplicity drive everything we build. We are committed to maintaining the highest standards of data privacy while delivering lightning-fast results.
           </p>
        </div>
      </div>

      <div className="bg-white dark:bg-[#141414] rounded-3xl p-10 md:p-16 border border-gray-200 dark:border-white/5 text-center shadow-lg dark:shadow-none transition-colors">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-10">Meet the Leadership</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12">
          
          {/* Founder */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-3xl font-bold text-white mb-4 shadow-lg shadow-purple-500/20">
              YD
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white">Yashwanth Devulapally</h3>
            <span className="text-purple-600 dark:text-purple-400 text-sm font-medium uppercase tracking-wider mt-1">Founder</span>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-3 max-w-xs">
              Visionary leader driving the technical and strategic direction of Tars Networks.
            </p>
          </div>

          {/* Co-founder */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-600 flex items-center justify-center text-3xl font-bold text-white mb-4 shadow-lg shadow-indigo-500/20">
              A
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white">Asvaan</h3>
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-medium uppercase tracking-wider mt-1">Co-Founder</span>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-3 max-w-xs">
              Operational excellence and product strategy expert ensuring user satisfaction.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;