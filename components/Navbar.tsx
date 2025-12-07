
import { useState } from 'react';
import { Menu, X, Search, ChevronRight, LayoutGrid, Crown, User, Bell, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { allCategories, toolsData } from '../data/tools';
import { CategoryId } from '../types';

interface NavbarProps {
  setPage: (page: string) => void;
  setCategory?: (category: CategoryId | 'all') => void;
  isLoggedIn?: boolean;
  isDarkMode: boolean;
  toggleTheme: () => void;
  onToolClick?: (toolId: string) => void;
}

interface MegaMenuProps {
  activeCategory: CategoryId;
  setActiveCategory: (id: CategoryId) => void;
  positionClass?: string;
  onToolClick?: (toolId: string) => void;
}

const MegaMenu = ({ activeCategory, setActiveCategory, positionClass = "-left-20", onToolClick }: MegaMenuProps) => {
  return (
    <div className={`absolute top-14 pt-4 ${positionClass}`}>
      {/* Invisible bridge to prevent menu from closing when moving cursor */}
      <div className="absolute -top-4 left-0 w-full h-8 bg-transparent" />
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className="w-[900px] bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl dark:shadow-black/50 overflow-hidden flex"
      >
        {/* Left Sidebar: Categories */}
        <div className="w-64 bg-gray-50 dark:bg-[#0a0a0a] border-r border-gray-200 dark:border-white/5 p-4 flex flex-col gap-2">
          {allCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              onMouseEnter={() => setActiveCategory(cat.id)}
              className={`text-left px-4 py-3 rounded-lg flex items-center justify-between transition-all ${
                activeCategory === cat.id 
                  ? 'bg-gray-200 dark:bg-white/10 text-black dark:text-white' 
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'
              }`}
            >
              <span className="capitalize">{cat.label}</span>
              {activeCategory === cat.id && <ChevronRight className="w-4 h-4" />}
            </button>
          ))}
        </div>

        {/* Right Content: Tools Grid */}
        <div className="flex-1 p-6 bg-white dark:bg-[#141414]">
          {/* Search inside Mega Menu */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder={`Search ${activeCategory} tools...`}
              className="w-full bg-gray-100 dark:bg-[#1e1e1e] border border-transparent dark:border-white/5 rounded-full py-2 pl-10 pr-4 text-sm text-black dark:text-white placeholder-gray-500 focus:outline-none focus:border-gray-300 dark:focus:border-white/20 transition-colors"
            />
          </div>

          {/* Tools List */}
          <div className="grid grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {toolsData[activeCategory]?.map((tool) => (
              <div 
                key={tool.id} 
                className="group flex items-start gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                onClick={() => onToolClick && onToolClick(tool.id)}
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-white/10 transition-colors shrink-0">
                  <tool.icon className="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white leading-tight mb-1">
                    {tool.title}
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            )) || <div className="text-gray-500 p-4">No tools found for this category.</div>}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Use the existing Navbar logic but simplified as the Header component now handles rendering
// This component acts as the main Navbar for the app
const Navbar = ({ setPage, setCategory, isLoggedIn = false, isDarkMode, toggleTheme, onToolClick }: NavbarProps) => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryId>('pdf');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAiToolsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (setCategory) setCategory('ai-tools');
    setPage('all-tools');
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleToolsClick = () => {
    if (setCategory) setCategory('all');
    setPage('all-tools');
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleNavClick = (page: string) => {
    setPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer z-50"
          onClick={() => handleNavClick('home')}
        >
          <div className="w-8 h-8 bg-black dark:bg-white rounded flex items-center justify-center">
            <LayoutGrid className="text-white dark:text-black w-5 h-5" />
          </div>
          <span className="text-black dark:text-white font-bold text-lg tracking-tight">ConvertA2Z</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          
          {/* Categories Section */}
          <div 
            className="relative h-16 flex items-center"
            onMouseEnter={() => setIsCategoriesOpen(true)}
            onMouseLeave={() => setIsCategoriesOpen(false)}
          >
            <button 
              className={`hover:text-black dark:hover:text-white transition-colors flex items-center gap-1 py-4 ${isCategoriesOpen ? 'text-black dark:text-white' : ''}`}
            >
              Categories
            </button>
            <AnimatePresence>
              {isCategoriesOpen && (
                <MegaMenu 
                  activeCategory={activeCategory} 
                  setActiveCategory={setActiveCategory}
                  positionClass="-left-4" 
                  onToolClick={onToolClick}
                />
              )}
            </AnimatePresence>
          </div>

          <button 
            onClick={handleToolsClick}
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Tools
          </button>

          {/* AI Tools */}
          <a 
            href="#" 
            onClick={handleAiToolsClick}
            className="hover:text-black dark:hover:text-white transition-colors relative group"
          >
            AI Tools
            <span className="absolute -top-3 -right-3 text-[9px] bg-purple-600 text-white px-1.5 rounded-full">NEW</span>
          </a>

          <button onClick={() => handleNavClick('pricing')} className="hover:text-black dark:hover:text-white transition-colors">Pricing</button>
          <button onClick={() => handleNavClick('about')} className="hover:text-black dark:hover:text-white transition-colors">About</button>
          <button onClick={() => handleNavClick('contact')} className="hover:text-black dark:hover:text-white transition-colors">Contact</button>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-white/10"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {isLoggedIn ? (
            <div className="hidden md:flex items-center gap-5">
               <button className="text-gray-400 hover:text-white transition-colors relative">
                 <Bell className="w-5 h-5" />
                 <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
               </button>
               <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
                 <Crown className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                 <span className="text-xs font-bold text-yellow-500">PRO</span>
               </div>
               <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center border border-white/20 cursor-pointer hover:border-white/50 transition-all shadow-lg">
                 <span className="text-white text-xs font-bold">JD</span>
               </div>
            </div>
          ) : (
            <button 
              onClick={() => handleNavClick('login')}
              className="hidden md:block text-sm font-medium text-black dark:text-white bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
            >
              Log in
            </button>
          )}
          
          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-black dark:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-white/10 overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-4">
              <button onClick={() => handleNavClick('all-tools')} className="block py-2 text-left text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Categories</button>
              <button onClick={() => handleNavClick('all-tools')} className="block py-2 text-left text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Tools</button>
              <button onClick={handleAiToolsClick} className="block py-2 text-left text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">AI Tools</button>
              <button onClick={() => handleNavClick('pricing')} className="block py-2 text-left text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Pricing</button>
              <button onClick={() => handleNavClick('about')} className="block py-2 text-left text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">About</button>
              <button onClick={() => handleNavClick('contact')} className="block py-2 text-left text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Contact</button>
              
              {!isLoggedIn ? (
                <button 
                  onClick={() => handleNavClick('login')}
                  className="w-full text-center bg-black dark:bg-white text-white dark:text-black font-medium py-3 rounded-lg mt-4"
                >
                  Log In
                </button>
              ) : (
                <div className="flex flex-col gap-4 mt-4 border-t border-gray-200 dark:border-white/10 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center">
                       <span className="text-white text-xs font-bold">JD</span>
                    </div>
                    <div>
                      <div className="text-black dark:text-white text-sm font-medium">John Doe</div>
                      <div className="text-gray-500 text-xs">Premium Member</div>
                    </div>
                  </div>
                  <button onClick={() => handleNavClick('home')} className="text-left text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Dashboard</button>
                  <button className="text-left text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300">Sign Out</button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
