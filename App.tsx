
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import DashboardHeader from './components/DashboardHeader';
import Hero from './components/Hero';
import ToolGrid from './components/ToolGrid';
import Features from './components/Features';
import Promo from './components/Promo';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import AllTools from './components/AllTools';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Sidebar from './components/Sidebar';
import ToolView from './components/ToolView';
import { CategoryId, ToolItem } from './types';
import { allToolsList } from './data/tools';

function App() {
  const [page, setPage] = useState('home');
  const [currentCategory, setCurrentCategory] = useState<CategoryId | 'all'>('all');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);
  
  // State for the Home page Hero filter pills
  const [heroFilter, setHeroFilter] = useState<CategoryId | 'all'>('all');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleToolClick = (toolId: string) => {
    const tool = allToolsList.find(t => t.id === toolId);
    if (tool) {
        setSelectedTool(tool);
        setPage('tool-view');
        window.scrollTo(0, 0);
    }
  };

  // Define layout visibility rules
  const isAuthPage = page === 'login' || page === 'signup';
  
  // All Tools has a custom layout (own sidebar) only when NOT logged in
  const isPublicAllToolsPage = page === 'all-tools' && !isLoggedIn;

  // Tool View logic
  const isToolView = page === 'tool-view';

  // Navbar is only shown for public non-auth pages, except tool view if we want full screen tool
  const showNavbar = !isLoggedIn && !isAuthPage && !isPublicAllToolsPage;
  
  // Dashboard Header is shown when Logged In
  const showDashboardHeader = isLoggedIn && !isAuthPage;

  // Sidebar is shown when Logged In
  const showSidebar = isLoggedIn && !isAuthPage;

  // Features and Promo are marketing content, hide when logged in or viewing a tool
  const showMarketingContent = !isLoggedIn && !isToolView;

  // Footer is shown on public pages, and NOT shown when logged in or viewing tool
  const showFooter = !isLoggedIn && !isAuthPage && !isPublicAllToolsPage && !isToolView;

  if (page === 'login') {
    return <Login setPage={setPage} setIsLoggedIn={setIsLoggedIn} />;
  }

  if (page === 'signup') {
    return <SignUp setPage={setPage} setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div className="min-h-screen bg-apple-bg dark:bg-[#0a0a0a] text-apple-text dark:text-white selection:bg-purple-500/30 transition-colors duration-300">
      {showNavbar && (
        <Navbar 
          setPage={setPage} 
          setCategory={setCurrentCategory} 
          isLoggedIn={isLoggedIn}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          onToolClick={handleToolClick}
        />
      )}

      {showDashboardHeader && (
        <DashboardHeader isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      )}
      
      {showSidebar && (
        <Sidebar 
          page={page} 
          setPage={setPage} 
          setIsLoggedIn={setIsLoggedIn} 
          currentCategory={currentCategory}
          setCategory={setCurrentCategory}
          isLoggedIn={isLoggedIn}
        />
      )}
      
      <main className={`${showSidebar ? 'lg:pl-64 pt-20' : ''} transition-all duration-300`}>
        {page === 'home' && (
          <>
            <Hero activeCategory={heroFilter} setActiveCategory={setHeroFilter} />
            <ToolGrid 
              activeCategory={heroFilter} 
              setPage={setPage} 
              onToolClick={handleToolClick}
            />
            {showMarketingContent && <Features />}
            {showMarketingContent && <Promo />}
          </>
        )}
        {page === 'pricing' && <Pricing />}
        {page === 'about' && <About />}
        {page === 'contact' && <Contact />}
        {page === 'all-tools' && (
          <AllTools 
            initialCategory={currentCategory} 
            setPage={setPage} 
            isLoggedIn={isLoggedIn}
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
            onToolClick={handleToolClick}
          />
        )}

        {page === 'tool-view' && selectedTool && (
           <ToolView 
             tool={selectedTool}
             onBack={() => setPage(isLoggedIn ? 'all-tools' : 'home')}
           />
        )}
        
        {page !== 'home' && page !== 'pricing' && page !== 'about' && page !== 'contact' && page !== 'all-tools' && page !== 'saved' && page !== 'settings' && page !== 'history' && page !== 'tool-view' && (
          <div className="pt-32 pb-24 px-6 text-center min-h-[50vh] flex flex-col justify-center items-center">
             <h1 className="text-3xl font-bold dark:text-white mb-4 capitalize">{page} Page</h1>
             <p className="text-gray-500 dark:text-gray-400 mb-8">This feature is coming soon.</p>
             <button 
                onClick={() => setPage(isLoggedIn ? 'all-tools' : 'home')}
                className="px-6 py-2 bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 rounded-lg dark:text-white text-black transition-colors"
              >
                Go Back
              </button>
           </div>
        )}

        {page === 'saved' && (
          <div className="pt-10 pb-24 px-6 lg:px-10 max-w-[1800px] mx-auto min-h-screen">
            <h1 className="text-3xl font-bold dark:text-white mb-6">Saved Files</h1>
            <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/5 rounded-2xl p-10 text-center shadow-sm dark:shadow-none">
               <p className="text-gray-500">No saved files yet. Convert a file to see it here.</p>
            </div>
          </div>
        )}

        {page === 'settings' && (
           <div className="pt-10 pb-24 px-6 lg:px-10 max-w-[1800px] mx-auto min-h-screen">
             <h1 className="text-3xl font-bold dark:text-white mb-6">Settings</h1>
             <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/5 rounded-2xl p-8 shadow-sm dark:shadow-none">
               <div className="max-w-xl space-y-6">
                 <div>
                   <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Display Name</label>
                   <input type="text" value="John Doe" className="w-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2 dark:text-white" readOnly />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Email Address</label>
                   <input type="email" value="john@example.com" className="w-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2 dark:text-white" readOnly />
                 </div>
                 <div className="pt-4">
                   <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-500 shadow-md shadow-purple-500/20">Save Changes</button>
                 </div>
               </div>
             </div>
           </div>
        )}

        {page === 'history' && (
          <div className="pt-10 pb-24 px-6 lg:px-10 max-w-[1800px] mx-auto min-h-screen">
            <h1 className="text-3xl font-bold dark:text-white mb-6">History</h1>
            <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/5 rounded-2xl p-10 text-center shadow-sm dark:shadow-none">
               <p className="text-gray-500">Your recent activities will appear here.</p>
            </div>
          </div>
        )}
      </main>
      
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
