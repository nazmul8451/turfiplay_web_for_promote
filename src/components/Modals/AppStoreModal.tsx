import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, CheckCircle2 } from 'lucide-react';
import appstoreImg from '../../assets/images/sports/appstore.png';

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
          className="relative max-w-md w-full bg-white rounded-3xl p-8 border border-[#00A859]/30 shadow-2xl text-center overflow-hidden"
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

          {/* App Store Icon Badge */}
          <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center mx-auto mb-5 shadow-md border border-slate-700">
            <img src={appstoreImg} alt="App Store" className="w-8 h-8 object-contain" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A859]/10 border border-[#00A859]/20 mb-4">
            <Clock size={14} className="text-[#00A859] animate-pulse" />
            <span className="text-xs font-bold text-[#00A859] uppercase tracking-wider">
              Publishing Progress
            </span>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
            App Store Version Coming Soon!
          </h3>

          <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">
            We are currently finalizing the Apple App Store review and publishing process. <strong className="text-slate-900">TurfPlay for iOS</strong> will be live very soon!
          </p>

          <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 mb-6 text-left space-y-2 text-xs font-medium text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#00A859] flex-shrink-0" />
              <span>Android version available now on Google Play</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#00A859] flex-shrink-0" />
              <span>Full Web Platform accessible on any browser</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.turfplay.app&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#00A859] text-white font-extrabold rounded-full uppercase tracking-wider text-xs shadow-md hover:bg-[#008746] transition-colors flex items-center justify-center gap-2"
            >
              <span>Get Android App on Google Play</span>
            </a>

            <button
              onClick={onClose}
              className="w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-full text-xs hover:bg-slate-200 transition-colors"
            >
              Got it
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
