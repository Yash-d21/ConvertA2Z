import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { CategoryId } from '../types';

interface HeroProps {
  activeCategory: CategoryId | 'all';
  setActiveCategory: (category: CategoryId | 'all') => void;
}

const pills: { label: string; id: CategoryId | 'all' }[] = [
  { label: 'All Tools', id: 'all' },
  { label: 'PDF', id: 'pdf' },
  { label: 'Image', id: 'image' },
  { label: 'Video', id: 'video' },
  { label: 'Audio', id: 'audio' },
  { label: 'File', id: 'file' },
  { label: 'AI Tools', id: 'ai-tools' }
];

const Hero = ({ activeCategory, setActiveCategory }: HeroProps) => {
  return (
    <section className="pt-32 pb-16 px-6 lg:px-10 text-center max-w-[1800px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-6 tracking-tight leading-tight transition-colors duration-300">
          Convert Anything,<br />
          <span className="text-gray-500 dark:text-gray-400">Anytime, A to Z.</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-12 transition-colors duration-300">
          The ultimate utility suite for your digital workflow. Transform documents, 
          edit media, and generate content with AI—all in one place.
        </p>

        {/* Pills Container */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {pills.map((pill) => (
            <button
              key={pill.id}
              onClick={() => setActiveCategory(pill.id)}
              className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all ${
                activeCategory === pill.id
                  ? 'bg-black text-white dark:bg-white dark:text-black border-transparent'
                  : 'bg-transparent text-gray-600 dark:text-gray-400 border-gray-300 dark:border-white/20 hover:border-gray-500 dark:hover:border-white/50 hover:text-black dark:hover:text-white'
              }`}
            >
              {pill.label}
            </button>
          ))}
          
          <button className="w-10 h-10 rounded-full border border-gray-300 dark:border-white/20 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-gray-500 dark:hover:border-white/50 transition-all">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;