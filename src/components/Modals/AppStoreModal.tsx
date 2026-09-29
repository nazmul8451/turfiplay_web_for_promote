import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import appstoreImg from '../../assets/images/sports/appstore.png';
import logoImg from '../../assets/images/sports/Layer_1.png';

interface AppStoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppStoreModal: React.FC<AppStoreModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative max-w-md w-full max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 border border-[#00A859]/30 shadow-2xl text-center"
          onClick={e => e.stopPropagation()}
        >
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#00A859]" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={18} />
          </button>

          {/* Brand Logo & App Store Badge */}
          <div className="flex items-center justify-center gap-3.5 mb-5 mt-1">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 flex items-center justify-center p-2.5 shadow-sm">
              <img src={logoImg} alt="TurfPlay Logo" className="w-full h-full object-contain drop-shadow-sm" />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center shadow-md border border-slate-700">
              <img src={appstoreImg} alt="App Store" className="w-7 h-7 object-contain" />
            </div>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A859]/10 border border-[#00A859]/25 mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#00A859]" />
            <span className="text-[11px] sm:text-xs font-bold text-[#00A859]">
              iOS অ্যাপ কামিং সুন
            </span>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mb-2.5 tracking-tight">
            TurfPlay iOS অ্যাপ শীঘ্রই আসছে!
          </h3>

          <div className="flex items-center justify-center gap-1.5 text-xs text-amber-600 font-semibold mb-4">
            <Clock size={13} className="animate-pulse" />
            <span>অ্যাপল রিভিউ ও পাবলিশিং প্রক্রিয়া চলমান</span>
          </div>

          <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">
            খুব শীঘ্রই অ্যাপল অ্যাপ স্টোরে <strong className="text-slate-900">আইওএস (iOS)-এর জন্য TurfPlay</strong> লাইভ হবে। ততক্ষণ পর্যন্ত অ্যান্ড্রয়েড ও সরাসরি ওয়েব প্ল্যাটফর্ম ব্যবহার করতে পারেন।
          </p>

          <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 mb-6 text-left space-y-2.5 text-xs font-medium text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#00A859] flex-shrink-0" />
              <span>অ্যান্ড্রয়েড অ্যাপ গুগল প্লে স্টোরে পাওয়া যাচ্ছে</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#00A859] flex-shrink-0" />
              <span>যেকোনো ব্রাউজারে সম্পূর্ণ ওয়েব প্ল্যাটফর্ম ব্যবহার করতে পারবেন</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.turfplay.app&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#00A859] text-white font-extrabold rounded-full uppercase tracking-wider text-xs shadow-md hover:bg-[#008746] transition-colors flex items-center justify-center gap-2"
            >
              <span>গুগল প্লে স্টোর থেকে অ্যাপ নিন</span>
            </a>

            <button
              onClick={onClose}
              className="w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-full text-xs hover:bg-slate-200 transition-colors"
            >
              ঠিক আছে
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
