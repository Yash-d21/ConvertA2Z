import React, { useState } from 'react';
import { Crown, Bell, X, Check, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DashboardHeaderProps {
  userInitial?: string;
  isDarkMode?: boolean;
  toggleTheme?: () => void;
}

const notifications = [
  { id: 1, title: 'Export Complete', desc: 'Your PDF to Word conversion is ready.', time: '2m ago', read: false },
  { id: 2, title: 'New Feature', desc: 'Try our new AI Script Writer tool.', time: '1h ago', read: false },
  { id: 3, title: 'Payment Success', desc: 'Your Pro subscription has been renewed.', time: '1d ago', read: true },
];

const DashboardHeader = ({ userInitial = "JD", isDarkMode = true, toggleTheme }: DashboardHeaderProps) => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 h-20 bg-white/80 dark:bg-[#0a0a0a] z-30 flex items-center justify-end px-10 border-b border-gray-200 dark:border-white/5 backdrop-blur-sm bg-opacity-90 transition-colors duration-300">
      <div className="flex items-center gap-6">
        
        {/* Theme Toggle */}
        {toggleTheme && (
           <button 
             onClick={toggleTheme}
             className="p-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-white/10"
           >
             {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
           </button>
        )}

        {/* Notifications */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-10 right-0 w-80 bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl dark:shadow-2xl overflow-hidden z-50"
              >
                <div className="p-4 border-b border-gray-200 dark:border-white/5 flex justify-between items-center">
                  <h4 className="font-semibold text-black dark:text-white text-sm">Notifications</h4>
                  <button onClick={() => setShowNotifications(false)} className="text-gray-500 hover:text-black dark:hover:text-white">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="max-h-[300px] overflow-y-auto">
                  {notifications.map((notif) => (
                    <div key={notif.id} className={`p-4 border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer ${!notif.read ? 'bg-blue-50/50 dark:bg-white/[0.02]' : ''}`}>
                      <div className="flex justify-between items-start mb-1">
                        <h5 className={`text-sm ${!notif.read ? 'text-black dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
                          {notif.title}
                        </h5>
                        <span className="text-[10px] text-gray-500 dark:text-gray-600">{notif.time}</span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-500 leading-relaxed">{notif.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center border-t border-gray-200 dark:border-white/5">
                  <button className="text-xs text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 font-medium">Mark all as read</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-100 dark:bg-yellow-500/10 border border-yellow-200 dark:border-yellow-500/20 rounded-full">
          <Crown className="w-4 h-4 text-yellow-600 dark:text-yellow-500 fill-yellow-600 dark:fill-yellow-500" />
          <span className="text-xs font-bold text-yellow-600 dark:text-yellow-500">PRO</span>
        </div>
        
        <div className="flex items-center gap-3 pl-2 border-l border-gray-200 dark:border-white/10">
          <div className="w-9 h-9 rounded-full bg-black dark:bg-[#1a1a1a] flex items-center justify-center border border-gray-200 dark:border-white/20 cursor-pointer hover:border-gray-400 dark:hover:border-white/50 transition-all shadow-lg group">
            <span className="text-white dark:text-gray-300 group-hover:text-white text-xs font-bold">{userInitial}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;