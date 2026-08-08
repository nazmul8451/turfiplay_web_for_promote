import React from 'react';
import { Zap, Instagram, Facebook, Twitter, Mail, MapPin } from 'lucide-react';
import logoImg from '../../assets/images/sports/Layer_1.png';

export const Footer = () => {
  return (
    <footer className="pt-16 lg:pt-24 pb-10 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div
              className="flex items-center gap-3 mb-6 cursor-pointer group w-fit"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src={logoImg}
                alt="TurfiPlay Logo"
                className="h-9 w-auto object-contain group-hover:scale-105 transition-transform"
              />
              <span className="font-serif text-xl tracking-tight text-slate-900">
                Turf<span className="italic text-[#00A859]">Play</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6">
              স্পোর্টস টার্ফ মালিকদের জন্য প্রফেশনাল ম্যানেজমেন্ট সিস্টেম। দ্রুততা, নির্ভুলতা ও ব্যবসায়িক প্রবৃদ্ধির জন্য তৈরি।
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-[#00A859] hover:text-white transition-all shadow-sm group">
                  <Icon size={16} className="text-slate-600 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-[0.2em] mb-6">প্ল্যাটফর্ম</h4>
            <ul className="space-y-4 text-slate-600 font-bold tracking-wider text-xs">
              <li><a href="#how-it-works" className="hover:text-[#00A859] transition-colors">ইকোসিস্টেম</a></li>
              <li><a href="#partner" className="hover:text-[#00A859] transition-colors">পার্টনার হোন</a></li>
              <li><a href="#pricing" className="hover:text-[#00A859] transition-colors">প্রাইসিং</a></li>
              <li><a href="#testimonials" className="hover:text-[#00A859] transition-colors">মতামত</a></li>
              <li><a href="#faq" className="hover:text-[#00A859] transition-colors">সাধারণ জিজ্ঞাসা</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-[0.2em] mb-6">সাপোর্ট</h4>
            <ul className="space-y-4 text-slate-600 font-bold tracking-wider text-xs">
              <li><a href="#contact" className="hover:text-[#00A859] transition-colors">যোগাযোগ</a></li>
              <li><a href="#waitlist" className="hover:text-[#00A859] transition-colors">ওয়েটলিস্ট</a></li>
              <li><a href="#" className="hover:text-[#00A859] transition-colors">প্রাইভেসি পলিসি</a></li>
              <li><a href="#" className="hover:text-[#00A859] transition-colors">সেবার শর্তাবলী</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-[0.2em] mb-6">অবস্থান</h4>
            <ul className="space-y-4 text-slate-600 font-medium text-xs">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#00A859]" />
                rimon124567@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-[#00A859]" />
                DHAKA, BANGLADESH
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-semibold tracking-wider">
            © {new Date().getFullYear()} TurfPlay. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="text-slate-500 text-xs font-semibold tracking-wider flex items-center gap-1.5">
            তৈরি করেছে <Zap size={12} className="text-[#00A859]" /> TurfPlay টিম
          </p>
        </div>
      </div>
    </footer>
  );
};
