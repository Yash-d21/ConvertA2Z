import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-10 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 transition-colors">Get in Touch</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-lg transition-colors">
            Have questions about our tools or enterprise pricing? We're here to help. Reach out to the Tars Networks team.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0 border border-gray-200 dark:border-white/10 transition-colors">
                <Phone className="w-5 h-5 text-black dark:text-white" />
              </div>
              <div>
                <h3 className="text-black dark:text-white font-medium mb-1">Phone Support</h3>
                <p className="text-gray-500 text-sm mb-1">Mon-Fri from 9am to 6pm</p>
                <a href="tel:9398097742" className="text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-500 dark:hover:text-purple-300 transition-colors">
                  +91 93980 97742
                </a>
                <p className="text-gray-500 dark:text-gray-600 text-xs mt-1">Yashwanth Devulapally</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0 border border-gray-200 dark:border-white/10 transition-colors">
                <Mail className="w-5 h-5 text-black dark:text-white" />
              </div>
              <div>
                <h3 className="text-black dark:text-white font-medium mb-1">Email</h3>
                <p className="text-gray-500 text-sm mb-1">For general inquiries</p>
                <a href="mailto:contact@tarsnetworks.com" className="text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-500 dark:hover:text-purple-300 transition-colors">
                  contact@tarsnetworks.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0 border border-gray-200 dark:border-white/10 transition-colors">
                <MapPin className="w-5 h-5 text-black dark:text-white" />
              </div>
              <div>
                <h3 className="text-black dark:text-white font-medium mb-1">Office</h3>
                <p className="text-gray-500 text-sm">
                  Tars Networks HQ<br />
                  Hyderabad, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-[#141414] p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-white/5 shadow-lg dark:shadow-none transition-colors">
          <h3 className="text-xl font-bold text-black dark:text-white mb-6">Send us a message</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs text-gray-500 uppercase tracking-wider font-semibold">First Name</label>
                <input type="text" className="w-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-black dark:text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Last Name</label>
                <input type="text" className="w-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-black dark:text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Email</label>
              <input type="email" className="w-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-black dark:text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Message</label>
              <textarea className="w-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-black dark:text-white focus:outline-none focus:border-purple-500 transition-colors h-32 resize-none" placeholder="How can we help you?"></textarea>
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-2 shadow-lg shadow-purple-500/20">
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;