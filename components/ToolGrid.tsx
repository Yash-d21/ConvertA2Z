
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toolsData } from '../data/tools';
import { ArrowUpRight, Grid } from 'lucide-react';
import { CategoryId } from '../types';

interface ToolGridProps {
  activeCategory: CategoryId | 'all';
  setPage: (page: string) => void;
  onToolClick?: (toolId: string) => void;
}

const ToolGrid = ({ activeCategory, setPage, onToolClick }: ToolGridProps) => {
  
  let displayTools;

  if (activeCategory === 'all') {
    // Default "All" view: Mix of AI tools and others
    const aiTools = toolsData['ai-tools'].slice(0, 6);
    const otherTools = [
      toolsData['pdf'][0], // PDF to Word
      toolsData['image'][0], // JPG to PNG
      toolsData['video'][0], // MP4 to GIF
      toolsData['audio'][0], // MP3 Converter
      toolsData['pdf'][2], // Split PDF
      toolsData['image'][1], // Bg Remover
      toolsData['miscellaneous'][0], // Text to Slug
      toolsData['miscellaneous'][21], // Age Calculator
    ];
    displayTools = [...aiTools, ...otherTools];
  } else {
    // Specific category view: Show first 15 tools from that category
    displayTools = toolsData[activeCategory].slice(0, 15);
  }

  const handleCardClick = (toolId: string) => {
    if (onToolClick) {
      onToolClick(toolId);
    } else {
      setPage('all-tools'); // Fallback if no handler
    }
  };

  return (
    <section className="px-6 lg:px-10 pb-24 max-w-[1800px] mx-auto min-h-[600px]">
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6"
      >
        <AnimatePresence mode='popLayout'>
          {displayTools.map((tool, index) => (
            <motion.div
              layout
              key={tool.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleCardClick(tool.id)}
              className="group relative bg-white dark:bg-[#141414] hover:bg-gray-50 dark:hover:bg-[#1a1a1a] rounded-2xl p-6 border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-none cursor-pointer flex flex-col h-[220px]"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded transition-colors">
                  {tool.category === 'ai-tools' ? 'AI Power' : `${tool.category} Tool`}
                </span>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
              </div>

              <div className="flex-1 flex flex-col justify-end">
                <div className="mb-4 w-12 h-12 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] flex items-center justify-center border border-gray-100 dark:border-white/5 group-hover:border-gray-200 dark:group-hover:border-white/20 transition-colors">
                  <tool.icon className="w-6 h-6 text-gray-500 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-medium text-black dark:text-white mb-2 truncate transition-colors">{tool.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-500 line-clamp-2 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-16 text-center">
        <button 
          onClick={() => { setPage('all-tools'); window.scrollTo(0,0); }}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-black dark:text-white transition-all font-medium border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 group"
        >
          <Grid className="w-4 h-4 text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
          View All Tools
        </button>
      </div>
    </section>
  );
};

export default ToolGrid;
