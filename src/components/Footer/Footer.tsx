import React from 'react';
import { Zap, Instagram, Facebook, Twitter, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="pt-24 lg:pt-40 pb-10 lg:pb-16 bg-brand-bg border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1880px] mx-auto px-10 md:px-[10%] lg:px-[12%]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-24">
          <div className="lg:col-span-2">
            <div
              className="flex items-center gap-3 mb-8 cursor-pointer group w-fit"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,168,89,0.3)] group-hover:scale-110 transition-transform duration-500">
                <Zap className="text-black fill-black" size={20} />
              </div>
              <span className="text-2xl tracking-[-0.05em] text-[var(--text-primary)] select-none">
                <span className="font-extralight opacity-80">Turfi</span>
                <span className="font-black text-brand-green italic drop-shadow-[0_0_15px_rgba(0,168,89,0.4)]">Play</span>
              </span>
            </div>
            <p className="text-lg text-[var(--text-secondary)] max-w-md leading-relaxed font-medium mb-12">
              The professional management system for sports turf owners. Built for speed, accuracy, and growth.
            </p>
            <div className="flex gap-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-[var(--border-color)] flex items-center justify-center hover:bg-brand-green hover:text-black transition-all group">
                  <Icon size={20} className="text-[var(--text-secondary)] group-hover:text-black" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black text-[var(--text-primary)] uppercase tracking-[0.4em] mb-10">Platform</h4>
            <ul className="space-y-6 text-[var(--text-secondary)] font-bold uppercase tracking-widest text-[13px]">
              <li><a href="#about" className="hover:text-brand-green transition-colors">About</a></li>
              <li><a href="#features" className="hover:text-brand-green transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-brand-green transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-brand-green transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-brand-green transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-[var(--text-primary)] uppercase tracking-[0.4em] mb-10">Support</h4>
            <ul className="space-y-6 text-[var(--text-secondary)] font-bold uppercase tracking-widest text-[13px]">
              <li><a href="#contact" className="hover:text-brand-green transition-colors">Contact</a></li>
              <li><a href="#waitlist" className="hover:text-brand-green transition-colors">Waitlist</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-[var(--text-primary)] uppercase tracking-[0.4em] mb-10">Location</h4>
            <ul className="space-y-6 text-[var(--text-secondary)] font-bold text-[15px]">
              <li className="flex items-center gap-4">
                <Mail size={16} className="text-brand-green" />
                rimon124567@gmail.com
              </li>
              <li className="flex items-center gap-4">
                <MapPin size={16} className="text-brand-green" />
                DHAKA, BANGLADESH
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[var(--text-secondary)] text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} TurfiPlay. All Rights Reserved.
          </p>
          <p className="text-[var(--text-secondary)] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            Made with <Zap size={10} className="text-brand-green" /> by TurfiPlay Team
          </p>
        </div>
      </div>
    </footer>
  );
};
