
import React, { useState, useEffect } from 'react';
import { Search, LayoutGrid, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { allCategories, toolsData } from '../data/tools';
import { CategoryId } from '../types';

interface AllToolsProps {
  initialCategory?: CategoryId | 'all';
  setPage: (page: string) => void;
  isLoggedIn?: boolean;
  isDarkMode?: boolean;
  toggleTheme?: () => void;
  onToolClick?: (toolId: string) => void;
}

const AllTools = ({ initialCategory = 'all', setPage, isLoggedIn = false, isDarkMode, toggleTheme, onToolClick }: AllToolsProps) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all'>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  // Update active category if initialCategory changes from props (Sidebar click)
  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const filteredCategories = activeCategory === 'all' 
    ? allCategories 
    : allCategories.filter(c => c.id === activeCategory);

  const CategoryNav = () => (
    <div className="flex flex-col gap-1">
      <button
        onClick={() => setActiveCategory('all')}
        className={`text-left px-4 py-3 rounded-lg flex items-center justify-between transition-all ${
          activeCategory === 'all'
            ? 'bg-gray-200 dark:bg-white/10 text-black dark:text-white font-medium'
            : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'
        }`}
      >
        All Tools
        {activeCategory === 'all' && <ChevronRight className="w-4 h-4" />}
      </button>
      
      <div className="my-2 border-t border-gray-200 dark:border-white/5 mx-2"></div>
      
      {allCategories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setActiveCategory(cat.id)}
          className={`text-left px-4 py-3 rounded-lg flex items-center justify-between transition-all ${
            activeCategory === cat.id
              ? 'bg-gray-200 dark:bg-white/10 text-black dark:text-white font-medium'
              : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'
          }`}
        >
          {cat.label}
          {activeCategory === cat.id && <ChevronRight className="w-4 h-4" />}
        </button>
      ))}
    </div>
  );

  return (
    <div className={`min-h-screen bg-apple-bg dark:bg-[#0a0a0a] flex flex-col ${!isLoggedIn ? 'md:flex-row' : ''} transition-colors duration-300`}>
      
      {/* 
        PUBLIC MODE SIDEBAR 
        Only shown if NOT logged in. If logged in, the global Sidebar from App.tsx is used.
      */}
      {!isLoggedIn && (
        <>
          {/* Mobile Header (Public) */}
          <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-white/5 flex items-center px-6 z-30">
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setPage('home')}
            >
              <div className="w-8 h-8 bg-black dark:bg-white rounded flex items-center justify-center">
                <LayoutGrid className="text-white dark:text-black w-5 h-5" />
              </div>
              <span className="text-black dark:text-white font-bold text-lg">ConvertA2Z</span>
            </div>
          </div>

          {/* Fixed Sidebar (Public) */}
          <aside className="w-64 fixed top-0 bottom-0 left-0 border-r border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#0a0a0a] hidden md:flex flex-col z-20 transition-colors">
            <div className="p-6">
              <div 
                className="flex items-center gap-2 cursor-pointer mb-10"
                onClick={() => setPage('home')}
              >
                <div className="w-8 h-8 bg-black dark:bg-white rounded flex items-center justify-center shadow-lg">
                  <LayoutGrid className="text-white dark:text-black w-5 h-5" />
                </div>
                <span className="text-black dark:text-white font-bold text-xl tracking-tight">ConvertA2Z</span>
              </div>

              <h2 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4 px-2">
                Explore
              </h2>
              
              <CategoryNav />
            </div>
          </aside>
        </>
      )}

      {/* Main Content Area */}
      {/* 
         If logged in: we are inside the Global Main (which has pl-64).
         If public: we need md:ml-64 to offset the fixed sidebar.
      */}
      <main className={`flex-1 p-6 md:p-10 min-h-screen ${!isLoggedIn ? 'md:ml-64 pt-24 md:pt-10' : 'pt-6'}`}>
        
        <div className="max-w-[1600px] mx-auto">
          
          <div className="flex-1 min-w-0">
            {/* Header & Search */}
            <div className="mb-10">
              <h1 className="text-3xl font-bold text-black dark:text-white mb-6 transition-colors">
                {activeCategory === 'all' ? 'All Tools' : allCategories.find(c => c.id === activeCategory)?.label + ' Tools'}
              </h1>
              
              <div className="relative max-w-2xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search for any tool..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10 rounded-xl py-4 pl-12 pr-4 text-black dark:text-white placeholder-gray-500 focus:outline-none focus:border-gray-300 dark:focus:border-white/20 focus:ring-1 focus:ring-gray-300 dark:focus:ring-white/20 transition-all shadow-sm dark:shadow-lg"
                />
              </div>
            </div>

            {/* Tools Content */}
            <div className="space-y-16 pb-20">
              {filteredCategories.map((cat) => {
                // Filter tools by search query
                const catTools = toolsData[cat.id].filter(tool => 
                  tool.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                  tool.description.toLowerCase().includes(searchQuery.toLowerCase())
                );

                if (catTools.length === 0) return null;

                return (
                  <div key={cat.id} className="animate-in fade-in duration-500">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-white/5 transition-colors">
                      {cat.label}
                      <span className="text-xs font-normal text-gray-600 dark:text-gray-500 bg-gray-200 dark:bg-white/5 px-2 py-0.5 rounded-full">
                        {catTools.length}
                      </span>
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {catTools.map((tool) => (
                        <motion.div
                          key={tool.id}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          onClick={() => onToolClick && onToolClick(tool.id)}
                          className="group bg-white dark:bg-[#141414] hover:bg-gray-50 dark:hover:bg-[#1a1a1a] p-4 rounded-xl border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-all cursor-pointer flex gap-4 items-start hover:shadow-md dark:hover:shadow-lg hover:-translate-y-0.5"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-[#0a0a0a] flex items-center justify-center border border-gray-100 dark:border-white/5 group-hover:border-gray-200 dark:group-hover:border-white/20 transition-colors shrink-0">
                            <tool.icon className="w-5 h-5 text-gray-400 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-black dark:text-gray-200 group-hover:text-black dark:group-hover:text-white truncate mb-1">
                              {tool.title}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-500 line-clamp-2 leading-relaxed">
                              {tool.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Empty State */}
              {allCategories.every(cat => 
                toolsData[cat.id].filter(t => 
                  t.title.toLowerCase().includes(searchQuery.toLowerCase())
                ).length === 0
              ) && (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-lg">No tools found matching "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllTools;
