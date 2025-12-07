import React from 'react';
import { ArrowRight } from 'lucide-react';

const Features = () => {
  return (
    <section className="px-6 lg:px-10 py-20 bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-[1800px] mx-auto">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-12">Work Your Way</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Tan */}
          <div className="bg-[#f0e8d9] dark:bg-[#E6DCC5] rounded-2xl p-8 flex flex-col justify-between h-[300px] group cursor-pointer hover:scale-[1.01] transition-transform shadow-sm hover:shadow-md">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Batch Processing</h3>
              <p className="text-gray-800 dark:text-gray-700 leading-relaxed">
                Convert hundreds of files at once. Drag, drop, and let the cloud handle the heavy lifting securely.
              </p>
            </div>
            <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all text-black/70">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2: Maroon */}
          <div className="bg-[#8c4b4b] dark:bg-[#7A3E3E] rounded-2xl p-8 flex flex-col justify-between h-[300px] group cursor-pointer hover:scale-[1.01] transition-transform shadow-sm hover:shadow-md">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">API Integration</h3>
              <p className="text-white/90 dark:text-white/80 leading-relaxed">
                Connect your apps directly to our conversion engine. Robust documentation for developers.
              </p>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#7A3E3E] transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3: Green */}
          <div className="bg-[#d1f2d8] dark:bg-[#C5E6CC] rounded-2xl p-8 flex flex-col justify-between h-[300px] group cursor-pointer hover:scale-[1.01] transition-transform shadow-sm hover:shadow-md">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Enhancement</h3>
              <p className="text-gray-800 dark:text-gray-700 leading-relaxed">
                Not just conversion. Smart resizing, upscaling, and content generation powered by advanced models.
              </p>
            </div>
            <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all text-black/70">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;