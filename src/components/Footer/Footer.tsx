import React from 'react';
import { Zap, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import logoImg from '../../assets/images/sports/Layer_1.png';

export const Footer = () => {
  return (
    <footer className="pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-10 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden">
      <div className="container-fluid">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="lg:col-span-1">
            <div
              className="flex items-center gap-3 mb-4 sm:mb-6 cursor-pointer group w-fit"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src={logoImg}
                alt="TurfiPlay Logo"
                className="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform"
              />
              <span className="font-serif text-xl tracking-tight text-slate-900">
                Turf<span className="italic text-[#00A859]">Play</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-5 sm:mb-6">
              স্পোর্টস টার্ফ মালিকদের জন্য আধুনিক ডিজিটাল সিস্টেম। গতি, নির্ভুলতা ও প্রবৃদ্ধির নিশ্চয়তা।
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-[#00A859] hover:text-white transition-all shadow-sm group">
                  <Icon size={15} className="text-slate-600 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-[0.2em] mb-4 sm:mb-6">প্ল্যাটফর্ম</h4>
            <ul className="space-y-3 sm:space-y-4 text-slate-600 font-bold uppercase tracking-wider text-xs">
              <li><a href="#how-it-works" className="hover:text-[#00A859] transition-colors">ইকোসিস্টেম</a></li>
              <li><a href="#partner" className="hover:text-[#00A859] transition-colors">টার্ফ অনবোর্ডিং</a></li>
              <li><a href="#pricing" className="hover:text-[#00A859] transition-colors">মূল্য তালিকা</a></li>
              <li><a href="#testimonials" className="hover:text-[#00A859] transition-colors">গ্রাহক মতামত</a></li>
              <li><a href="#faq" className="hover:text-[#00A859] transition-colors">প্রশ্নোত্তর</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-[0.2em] mb-4 sm:mb-6">সাপোর্ট</h4>
            <ul className="space-y-3 sm:space-y-4 text-slate-600 font-bold uppercase tracking-wider text-xs">
              <li><a href="#contact" className="hover:text-[#00A859] transition-colors">যোগাযোগ</a></li>
              <li><a href="#waitlist" className="hover:text-[#00A859] transition-colors">ওয়েটলিস্ট</a></li>
              <li><a href="#" className="hover:text-[#00A859] transition-colors">প্রাইভেসি পলিসি</a></li>
              <li><a href="#" className="hover:text-[#00A859] transition-colors">শর্তাবলী</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-[0.2em] mb-4 sm:mb-6">ঠিকানা</h4>
            <ul className="space-y-3 sm:space-y-4 text-slate-600 font-medium text-xs">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#00A859] shrink-0" />
                <a href="tel:+8801892979324" className="hover:text-[#00A859] transition-colors">+880 1892-979324</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#00A859] shrink-0" />
                <span className="break-all">rimon124567@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-[#00A859] shrink-0" />
                <span>ঢাকা, বাংলাদেশ</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 sm:pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-slate-500 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
            © {new Date().getFullYear()} TurfPlay। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="text-slate-500 text-[11px] sm:text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5">
            TurfPlay টিম দ্বারা <Zap size={12} className="text-[#00A859]" /> নির্মিত
          </p>
        </div>
      </div>
    </footer>
  );
};
