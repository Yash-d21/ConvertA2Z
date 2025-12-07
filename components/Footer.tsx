import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#050505] border-t border-gray-200 dark:border-white/5 py-16 px-6 lg:px-10 transition-colors duration-300">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 text-sm">
        
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <h4 className="text-black dark:text-white font-bold text-xl mb-6">ConvertA2Z</h4>
          <p className="text-gray-500 dark:text-gray-500 mb-6 max-w-xs leading-relaxed">
            The world's most versatile file conversion and AI utility platform. Designed for creators, developers, and professionals.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Github size={20} /></a>
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h5 className="text-black dark:text-white font-semibold mb-4">Product</h5>
          <ul className="space-y-3 text-gray-500">
            <li><a href="#" className="hover:text-black dark:hover:text-gray-300">Tools</a></li>
            <li><a href="#" className="hover:text-black dark:hover:text-gray-300">Pricing</a></li>
            <li><a href="#" className="hover:text-black dark:hover:text-gray-300">API</a></li>
            <li><a href="#" className="hover:text-black dark:hover:text-gray-300">Teams</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-black dark:text-white font-semibold mb-4">Resources</h5>
          <ul className="space-y-3 text-gray-500">
            <li><a href="#" className="hover:text-black dark:hover:text-gray-300">Blog</a></li>
            <li><a href="#" className="hover:text-black dark:hover:text-gray-300">Documentation</a></li>
            <li><a href="#" className="hover:text-black dark:hover:text-gray-300">Community</a></li>
            <li><a href="#" className="hover:text-black dark:hover:text-gray-300">Help Center</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-black dark:text-white font-semibold mb-4">Company</h5>
          <ul className="space-y-3 text-gray-500">
            <li><a href="#" className="hover:text-black dark:hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-black dark:hover:text-gray-300">Careers</a></li>
            <li><a href="#" className="hover:text-black dark:hover:text-gray-300">Contact</a></li>
            <li><a href="#" className="hover:text-black dark:hover:text-gray-300">Press</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-black dark:text-white font-semibold mb-4">Legal</h5>
          <ul className="space-y-3 text-gray-500">
            <li><a href="#" className="hover:text-black dark:hover:text-gray-300">Privacy</a></li>
            <li><a href="#" className="hover:text-black dark:hover:text-gray-300">Terms</a></li>
            <li><a href="#" className="hover:text-black dark:hover:text-gray-300">Security</a></li>
            <li><a href="#" className="hover:text-black dark:hover:text-gray-300">Cookies</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
        <p>© 2024 ConvertA2Z Inc. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Made with React & Tailwind</span>
          <span>Fake App Demo</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;