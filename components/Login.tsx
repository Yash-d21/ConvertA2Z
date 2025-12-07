import React, { useState } from 'react';
import { LayoutGrid, Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';
import { motion } from 'framer-motion';

interface LoginProps {
  setPage: (page: string) => void;
  setIsLoggedIn: (value: boolean) => void;
}

const Login = ({ setPage, setIsLoggedIn }: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    setIsLoggedIn(true);
    setPage('all-tools');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] flex items-center justify-center p-6 relative overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"></div>
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

        <h2 className="text-2xl font-bold text-black dark:text-white text-center mb-2">Welcome Back</h2>
        <p className="text-gray-500 text-center mb-8 text-sm">Enter your credentials to access your account</p>

        <form onSubmit={handleLogin} className="space-y-4">
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
            <div className="flex justify-between ml-1">
              <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Password</label>
              <a href="#" className="text-xs text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300">Forgot?</a>
            </div>
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
            Sign In
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px bg-gray-200 dark:bg-white/10 flex-1"></div>
          <span className="text-gray-500 text-xs uppercase">Or continue with</span>
          <div className="h-px bg-gray-200 dark:bg-white/10 flex-1"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 rounded-xl py-3 transition-all text-black dark:text-white text-sm">
            <Chrome className="w-4 h-4" />
            Google
          </button>
          <button className="flex items-center justify-center gap-2 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 rounded-xl py-3 transition-all text-black dark:text-white text-sm">
            <Github className="w-4 h-4" />
            GitHub
          </button>
        </div>

        <p className="text-center mt-8 text-sm text-gray-500">
          Don't have an account?{' '}
          <button onClick={() => setPage('signup')} className="text-black dark:text-white font-semibold hover:underline">
            Sign up
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;