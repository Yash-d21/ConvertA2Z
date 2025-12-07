import React, { useState } from 'react';
import { LayoutGrid, Mail, Lock, User, ArrowRight, Github, Chrome } from 'lucide-react';
import { motion } from 'framer-motion';

interface SignUpProps {
  setPage: (page: string) => void;
  setIsLoggedIn: (value: boolean) => void;
}

const SignUp = ({ setPage, setIsLoggedIn }: SignUpProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate Sign Up
    setIsLoggedIn(true);
    setPage('all-tools');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] flex items-center justify-center p-6 relative overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative z-10"
      >
        <div 
          className="flex items-center gap-2 mb-8 cursor-pointer justify-center"
          onClick={() => setPage('home')}
        >
          <div className="w-8 h-8 bg-black dark:bg-white rounded flex items-center justify-center">
            <LayoutGrid className="text-white dark:text-black w-5 h-5" />
          </div>
          <span className="text-black dark:text-white font-bold text-lg tracking-tight">ConvertA2Z</span>
        </div>

        <h2 className="text-2xl font-bold text-black dark:text-white text-center mb-2">Create Account</h2>
        <p className="text-gray-500 text-center mb-8 text-sm">Join thousands of users converting smartly</p>

        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-xl py-3 pl-11 pr-4 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-xl py-3 pl-11 pr-4 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-xl py-3 pl-11 pr-4 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                required
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-black dark:bg-white text-white dark:text-black font-semibold py-3.5 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all flex items-center justify-center gap-2 mt-6 shadow-lg shadow-black/5 dark:shadow-white/5"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-gray-500">
          Already have an account?{' '}
          <button onClick={() => setPage('login')} className="text-black dark:text-white font-semibold hover:underline">
            Log in
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;