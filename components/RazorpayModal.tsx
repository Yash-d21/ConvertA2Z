import React, { useState, useEffect } from 'react';
import { X, Lock, CheckCircle, Loader2, CreditCard, Smartphone, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface RazorpayModalProps {
  isOpen: boolean;
  onClose: () => void;
  planPrice: string;
}

const RazorpayModal = ({ isOpen, onClose, planPrice }: RazorpayModalProps) => {
  const [step, setStep] = useState<'loading' | 'payment' | 'success'>('loading');

  useEffect(() => {
    if (isOpen) {
      setStep('loading');
      const timer = setTimeout(() => {
        setStep('payment');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handlePay = () => {
    setStep('loading');
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full max-w-sm bg-white rounded-lg shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#2b86f5] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                <span className="text-[#2b86f5] font-bold text-xl">R</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Razorpay</h3>
                <p className="text-blue-100 text-xs">Trusted Business</p>
              </div>
            </div>
            <button onClick={onClose} className="text-white/80 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 bg-[#f9fafb] min-h-[300px]">
            {step === 'loading' && (
              <div className="flex flex-col items-center justify-center h-64 space-y-4">
                <Loader2 className="w-10 h-10 text-[#2b86f5] animate-spin" />
                <p className="text-gray-500 text-sm">Processing securely...</p>
              </div>
            )}

            {step === 'payment' && (
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-gray-200 pb-4">
                  <div>
                    <p className="text-gray-500 text-xs uppercase font-bold tracking-wider">Amount to Pay</p>
                    <h2 className="text-2xl font-bold text-gray-800">₹{planPrice}.00</h2>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Lock className="w-3 h-3" />
                    Secure
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-700">Select Payment Method</p>
                  
                  <button onClick={handlePay} className="w-full flex items-center gap-4 bg-white p-4 rounded-lg border border-gray-200 hover:border-[#2b86f5] hover:shadow-md transition-all group">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#2b86f5]">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-gray-800 font-medium group-hover:text-[#2b86f5]">Card</p>
                      <p className="text-xs text-gray-500">Visa, MasterCard, RuPay</p>
                    </div>
                  </button>

                  <button onClick={handlePay} className="w-full flex items-center gap-4 bg-white p-4 rounded-lg border border-gray-200 hover:border-[#2b86f5] hover:shadow-md transition-all group">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-gray-800 font-medium group-hover:text-[#2b86f5]">UPI / QR</p>
                      <p className="text-xs text-gray-500">Google Pay, PhonePe, Paytm</p>
                    </div>
                  </button>

                  <button onClick={handlePay} className="w-full flex items-center gap-4 bg-white p-4 rounded-lg border border-gray-200 hover:border-[#2b86f5] hover:shadow-md transition-all group">
                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-gray-800 font-medium group-hover:text-[#2b86f5]">Netbanking</p>
                      <p className="text-xs text-gray-500">All Indian banks supported</p>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {step === 'success' && (
              <div className="flex flex-col items-center justify-center h-64 space-y-4 text-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"
                >
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800">Payment Successful!</h3>
                <p className="text-gray-500 text-sm max-w-[200px]">
                  Your subscription is now active. You will be redirected shortly.
                </p>
                <button 
                  onClick={onClose}
                  className="mt-4 px-6 py-2 bg-[#2b86f5] text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                >
                  Continue
                </button>
              </div>
            )}
          </div>
          
          <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex justify-between items-center">
             <span className="text-[10px] text-gray-400">Powered by Razorpay</span>
             <div className="flex gap-2">
                <div className="w-8 h-4 bg-gray-200 rounded"></div>
                <div className="w-8 h-4 bg-gray-200 rounded"></div>
             </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default RazorpayModal;