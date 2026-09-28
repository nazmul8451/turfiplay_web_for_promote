import React from 'react';
import { Mail, MapPin, Download } from 'lucide-react';
import logoImg from '../../assets/images/sports/Layer_1.png';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
    },
    {
      name: 'Linkedin',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.22a1.64 1.64 0 0 0-1.66 1.64c0 .9.74 1.64 1.66 1.64s1.63-.74 1.63-1.64c0-.9-.73-1.64-1.63-1.64z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'Behance',
      href: 'https://behance.net',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M22 7h-7v2h7V7zm1.726 10c-.442 1.297-2.029 3-4.976 3-3.466 0-5.75-2.529-5.75-6.07 0-3.666 2.37-6.07 5.62-6.07 3.32 0 5.23 2.25 5.23 5.76 0 .52-.06 1.11-.08 1.38h-7.8c.13 1.83 1.48 2.76 3.01 2.76 1.42 0 2.22-.64 2.59-1.35l2.15.59zm-7.65-4.04h4.89c-.06-1.57-1.12-2.51-2.43-2.51-1.35 0-2.34.94-2.46 2.51zM6.55 12.25c1.87-.43 2.92-1.7 2.92-3.32 0-2.61-2.02-3.93-4.83-3.93H0v14h5.27c2.97 0 5.17-1.48 5.17-4.17 0-1.42-.8-2.37-3.89-2.58zm-3.55-5.11h1.76c1.33 0 2.05.57 2.05 1.63 0 1.05-.72 1.68-2.05 1.68H3v-3.31zm1.94 9.72H3v-3.87h1.94c1.47 0 2.32.65 2.32 1.93 0 1.29-.85 1.94-2.32 1.94z" />
        </svg>
      ),
    },
    {
      name: 'Dribble',
      href: 'https://dribbble.com',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.66 7.02c-.52-.08-2.5-.38-4.85.34-.14-.33-.29-.66-.45-.98 2.65-1.41 3.73-3.1 3.86-3.32 1.05 1.08 1.7 2.52 1.7 4.12 0 .04-.01.07-.01.11zM12 3.6c.07 0 .14 0 .21.01-.15.25-1.17 1.83-3.76 3.19-.66-1.3-1.4-2.47-1.57-2.73C8.28 3.84 10.05 3.6 12 3.6zm-6.52 1.7c.18.27.91 1.43 1.58 2.74-2.97 1.01-5.06 1.04-5.27 1.04.53-2.14 1.98-3.9 3.89-4.85zM3.6 12c0-.14.01-.27.02-.4 0 0 2.34-.04 5.54-1.12.35.73.68 1.48.97 2.22-3.13 1.06-5.83 3.63-5.96 3.76-.36-1.34-.57-2.74-.57-4.46zm1.75 5.7c.21-.2 2.73-2.6 5.8-3.66.79 2.14 1.23 4.29 1.34 4.88-2.88 1.1-6.09.28-7.14-1.22zm8.65 2.7c-.12-.66-.56-2.76-1.33-4.87 2.16-.76 4.04-.46 4.54-.37-.58 2.3-2.17 4.2-4.21 5.24zm4.8-6.84c-.45-.09-2.57-.45-4.89.37-.29-.72-.61-1.43-.95-2.13 2.26-.75 4.34-.45 4.97-.35.35.63.6 1.32.73 2.06-.01.02-.01.03-.02.05z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-[#02180e] text-slate-300 overflow-hidden select-none border-t border-[#04331c] font-sans">
      {/* Background Lighting Gradients & Stadium Speed Streaks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ambient Dark Emerald Glows */}
        <div className="absolute -top-32 right-[-5%] w-[650px] h-[650px] bg-[#00E575]/12 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[-10%] w-[550px] h-[550px] bg-emerald-400/14 rounded-full blur-[130px]" />
        <div className="absolute -bottom-20 left-[-5%] w-[500px] h-[500px] bg-emerald-600/12 rounded-full blur-[120px]" />

        {/* Horizontal Speed Lines / Blur Streaks through the middle */}
        <div 
          className="absolute top-[52%] left-0 right-0 h-[180px] -translate-y-1/2 opacity-35"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(0, 229, 117, 0.12) 30%, rgba(52, 211, 153, 0.25) 50%, rgba(0, 229, 117, 0.12) 70%, transparent 100%)',
          }}
        />
        {/* Crisp horizontal speed line */}
        <div 
          className="absolute top-[50%] left-0 right-0 h-[1.5px] opacity-45"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(52, 211, 153, 0.35) 15%, rgba(110, 231, 183, 0.85) 50%, rgba(52, 211, 153, 0.35) 85%, transparent 100%)',
            boxShadow: '0 0 18px 3px rgba(0, 229, 117, 0.45)'
          }}
        />
        <div 
          className="absolute top-[54.5%] left-0 right-0 h-[1px] opacity-30"
          style={{
            background: 'linear-gradient(90deg, transparent 15%, rgba(0, 229, 117, 0.35) 50%, transparent 85%)',
          }}
        />
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 relative z-10">
        
        {/* Top 3-Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-8 sm:mb-12">
          
          {/* Column 1: TurfPlay Logo & Brand Info (matching Header design) */}
          <div className="lg:col-span-5 pr-0 lg:pr-6">
            <div 
              className="flex items-center gap-3 sm:gap-3.5 mb-5 cursor-pointer group w-fit"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {/* TurfPlay Original Logo Image */}
              <img
                src={logoImg}
                alt="TurfPlay Logo"
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(0,229,117,0.35)]"
              />

              {/* Exact Header Name Styling */}
              <span className="font-serif text-2xl sm:text-3xl tracking-tight text-white group-hover:text-[#00E575] transition-colors whitespace-nowrap">
                Turf<span className="italic text-[#00E575]">Play</span>
              </span>
            </div>

            {/* Description Text */}
            <p className="text-xs sm:text-[13px] leading-relaxed text-slate-300/85 max-w-[390px] font-normal">
              TurfPlay is a sports software company dedicated to building reliable, scalable, and human-centered digital solutions engineered for the future.
            </p>
          </div>

          {/* Column 2: For Contact */}
          <div className="lg:col-span-4 lg:pl-6">
            <h3 className="text-white text-sm sm:text-base font-bold tracking-tight mb-4">
              For Contact
            </h3>

            <div className="space-y-3.5 text-xs sm:text-[13px] text-slate-300/90">
              {/* Email */}
              <a
                href="mailto:info@turfplay.agency"
                className="flex items-center gap-3 group hover:text-white transition-colors"
              >
                <Mail size={16} strokeWidth={2} className="text-[#00E575] group-hover:text-emerald-300 transition-colors shrink-0" />
                <span className="text-slate-200 group-hover:text-[#00E575] transition-colors font-medium">
                  info@turfplay.agency
                </span>
              </a>

              {/* Location: Mohakhali, Dhaka */}
              <div className="flex items-center gap-3">
                <MapPin size={16} strokeWidth={2} className="text-[#00E575] shrink-0" />
                <span className="text-slate-200 font-medium">
                  Mohakhali, Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Our Social Platforms */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-sm sm:text-base font-bold tracking-tight mb-4">
              Our Social Platforms
            </h3>

            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs sm:text-[13px] text-slate-300 hover:text-white transition-colors group w-fit"
                >
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-slate-400 group-hover:text-[#00E575] group-hover:scale-110 transition-all shrink-0">
                    {social.icon}
                  </span>
                  <span className="group-hover:text-[#00E575] transition-colors font-medium">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Giant Watermark Background Text: "Turfplay" */}
        <div className="relative w-full my-3 sm:my-6 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <div 
            className="text-[14vw] sm:text-[16vw] lg:text-[195px] xl:text-[230px] font-black tracking-tight leading-none text-center select-none"
            style={{
              color: 'rgba(255, 255, 255, 0.06)',
              textShadow: '0 0 50px rgba(0, 229, 117, 0.06)',
              letterSpacing: '-0.04em',
            }}
          >
            Turfplay
          </div>
        </div>

        {/* Bottom Section: Company Deck (Left) & Centered Copyright */}
        <div className="pt-2 sm:pt-4 flex flex-col gap-6 relative">
          
          {/* Company Deck Download Card */}
          <div className="flex items-center justify-between">
            <a
              href="#download-deck"
              onClick={(e) => {
                e.preventDefault();
                alert('TurfPlay Company Deck (PDF, 3MB) download starting...');
              }}
              className="group flex items-center gap-3.5 cursor-pointer w-fit"
            >
              {/* Vibrant lime-green circular download icon button */}
              <div className="w-11 h-11 rounded-full bg-[#8ae046] group-hover:bg-[#9def52] text-slate-950 flex items-center justify-center shrink-0 shadow-lg shadow-[#8ae046]/25 transition-transform duration-200 group-hover:scale-105 active:scale-95">
                <Download size={19} strokeWidth={2.4} className="group-hover:translate-y-0.5 transition-transform" />
              </div>

              {/* Text */}
              <div className="flex flex-col text-left">
                <span className="text-white text-sm sm:text-[15px] font-bold tracking-tight group-hover:text-[#00E575] transition-colors">
                  Company Deck
                </span>
                <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors font-medium">
                  PDF, 3MB
                </span>
              </div>
            </a>
          </div>

          {/* Centered Copyright Line */}
          <div className="text-center pt-3 pb-1 border-t border-emerald-950/60">
            <p className="text-[11px] sm:text-xs text-slate-400/80 font-normal tracking-wide">
              © Copyright {currentYear} TurfPlay All Rights Reserved. | Powered by TurfPlay
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
};
