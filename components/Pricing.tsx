import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import RazorpayModal from './RazorpayModal';

const plans = [
  {
    name: 'Starter',
    price: '250',
    features: ['Access to basic conversion tools', '50 files per day', 'Standard support', 'No Ads'],
    missing: ['AI Tools', 'Batch Processing', 'API Access'],
    color: 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none',
    btnColor: 'bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-black dark:text-white'
  },
  {
    name: 'Pro',
    price: '500',
    features: ['Access to all conversion tools', 'Unlimited files', 'Priority support', 'AI Tools Access', 'Batch Processing'],
    missing: ['API Access'],
    color: 'bg-purple-50/50 dark:bg-gradient-to-b dark:from-purple-900/20 dark:to-purple-900/5 border-purple-200 dark:border-purple-500/30 shadow-xl shadow-purple-500/10 dark:shadow-none',
    btnColor: 'bg-purple-600 hover:bg-purple-500 text-white',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '999',
    features: ['Everything in Pro', 'API Access', 'Dedicated Account Manager', 'Custom Integrations', 'SSO Security'],
    missing: [],
    color: 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none',
    btnColor: 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200'
  }
];

const Pricing = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState('');

  const handlePlanClick = (price: string) => {
    setSelectedPrice(price);
    setShowModal(true);
  };

  return (
    <>
      <div className="pt-32 pb-24 px-6 lg:px-10 max-w-[1800px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 transition-colors">Simple, Transparent Pricing</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto transition-colors">
            Choose the plan that fits your needs. No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-3xl p-8 border flex flex-col relative transition-colors duration-300 ${plan.color}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-medium text-black dark:text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-black dark:text-white">₹{plan.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-green-600 dark:text-green-500" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
                {plan.missing.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 opacity-50">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                      <X className="w-3 h-3 text-red-500" />
                    </div>
                    <span className="text-gray-500 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handlePlanClick(plan.price)}
                className={`w-full py-4 rounded-xl font-medium transition-colors ${plan.btnColor}`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <RazorpayModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        planPrice={selectedPrice}
      />
    </>
  );
};

export default Pricing;