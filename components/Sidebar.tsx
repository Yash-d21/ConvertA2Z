import React, { useState } from 'react';
import { Home, Grid, Bookmark, Clock, Settings, HelpCircle, LogOut, LayoutGrid, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { allCategories } from '../data/tools';
import { CategoryId } from '../types';

interface SidebarProps {
  page: string;
  setPage: (page: string) => void;
  setIsLoggedIn: (value: boolean) => void;
  currentCategory?: CategoryId | 'all';
  setCategory?: (category: CategoryId | 'all') => void;
  isLoggedIn?: boolean;
}

const Sidebar = ({ page, setPage, setIsLoggedIn, currentCategory, setCategory, isLoggedIn = false }: SidebarProps) => {
  const [categoriesExpanded, setCategoriesExpanded] = useState(true);

  const handleCategoryClick = (catId: CategoryId | 'all') => {
    if (setCategory) setCategory(catId);
    setPage('all-tools');
    window.scrollTo(0, 0);
  };

  const handleLogoClick = () => {
    setPage(isLoggedIn ? 'all-tools' : 'home');
    if (isLoggedIn && setCategory) setCategory('all');
  };

  return (
    <aside className="fixed top-0 left-0 bottom-0 w-64 bg-gray-50 dark:bg-[#0a0a0a] border-r border-gray-200 dark:border-white/5 z-40 hidden lg:flex flex-col transition-colors duration-300">
      {/* Logo Area */}
      <div 
        className="h-20 flex items-center gap-3 px-6 cursor-pointer border-b border-gray-200 dark:border-white/5"
        onClick={handleLogoClick}
      >
        <div className="w-8 h-8 bg-black dark:bg-white rounded flex items-center justify-center shadow-lg">
          <LayoutGrid className="text-white dark:text-black w-5 h-5" />
        </div>
        <span className="text-black dark:text-white font-bold text-xl tracking-tight">ConvertA2Z</span>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar py-6 space-y-6">
        
        {/* 1. All Tools */}
        <div className="px-3">
           <button
              onClick={() => {
                setPage('all-tools');
                if (setCategory) setCategory('all');
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
                page === 'all-tools' && currentCategory === 'all'
                  ? 'bg-gray-200 dark:bg-white/10 text-black dark:text-white font-medium' 
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'
              }`}
            >
              <Grid className="w-4 h-4" />
              All Tools
            </button>
        </div>

        {/* 2. Categories List */}
        <div className="px-3 space-y-1">
          <button 
            onClick={() => setCategoriesExpanded(!categoriesExpanded)}
            className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            <span>Categories</span>
            {categoriesExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          </button>
          
          <AnimatePresence>
            {categoriesExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden space-y-1"
              >
                {allCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-all text-sm ml-2 ${
                      page === 'all-tools' && currentCategory === cat.id
                        ? 'text-purple-600 dark:text-purple-400 font-medium bg-purple-50 dark:bg-purple-500/10'
                        : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{cat.label}</span>
                    {page === 'all-tools' && currentCategory === cat.id && (
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400"></div>
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 3, 4, 5. Saved, Settings, History */}
        <div className="px-3 space-y-1">
          <div className="my-4 border-t border-gray-200 dark:border-white/5 mx-4"></div>
          
          <button 
            onClick={() => setPage('saved')}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
              page === 'saved' 
                ? 'bg-gray-200 dark:bg-white/10 text-black dark:text-white font-medium' 
                : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            Saved Files
          </button>

          <button 
             onClick={() => setPage('settings')}
             className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
              page === 'settings' 
                ? 'bg-gray-200 dark:bg-white/10 text-black dark:text-white font-medium' 
                : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'
            }`}
          >
            <Settings className="w-4 h-4" />
            Settings
          </button>

          <button 
             onClick={() => setPage('history')}
             className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
              page === 'history' 
                ? 'bg-gray-200 dark:bg-white/10 text-black dark:text-white font-medium' 
                : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'
            }`}
          >
            <Clock className="w-4 h-4" />
            History
          </button>
        </div>
      </div>

      {/* Footer / Sign Out */}
      <div className="p-4 border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#050505]">
        <button 
          onClick={() => {
            setIsLoggedIn(false);
            setPage('home');
          }}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-300 transition-all"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;