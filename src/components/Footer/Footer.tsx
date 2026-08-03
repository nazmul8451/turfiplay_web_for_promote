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
              The professional management system for sports turf owners. Built for speed, accuracy, and growth.
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
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-[0.2em] mb-6">Platform</h4>
            <ul className="space-y-4 text-slate-600 font-bold uppercase tracking-wider text-xs">
              <li><a href="#how-it-works" className="hover:text-[#00A859] transition-colors">Ecosystem</a></li>
              <li><a href="#features" className="hover:text-[#00A859] transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-[#00A859] transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-[#00A859] transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-[#00A859] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-[0.2em] mb-6">Support</h4>
            <ul className="space-y-4 text-slate-600 font-bold uppercase tracking-wider text-xs">
              <li><a href="#contact" className="hover:text-[#00A859] transition-colors">Contact</a></li>
              <li><a href="#waitlist" className="hover:text-[#00A859] transition-colors">Waitlist</a></li>
              <li><a href="#" className="hover:text-[#00A859] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#00A859] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-[0.2em] mb-6">Location</h4>
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
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
            © {new Date().getFullYear()} TurfPlay. All Rights Reserved.
          </p>
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
            Made with <Zap size={12} className="text-[#00A859]" /> by TurfPlay Team
          </p>
        </div>
      </div>
    </footer>
  );
};
