import React from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import logoImg from '../../assets/images/sports/Layer_1.png';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61589001530606',
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
      href: 'https://www.instagram.com/turfplaybangladesh',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@TurfplayBangladesh',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 relative z-10">
        
        {/* Giant Watermark Background Text: "Turfplay" at the top */}
        <div className="relative w-full pt-4 sm:pt-6 pb-2 flex items-center justify-center pointer-events-none select-none overflow-hidden">
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

        {/* Elegant divider line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-800/35 to-transparent my-8 sm:my-10" />

        {/* Info Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-10 sm:mb-12">
          
          {/* Column 1: TurfPlay Logo, Brand Info & Company Deck */}
          <div className="lg:col-span-5 pr-0 lg:pr-6 flex flex-col justify-between gap-6">
            <div>
              <div 
                className="flex items-center gap-3 sm:gap-3.5 mb-4 cursor-pointer group w-fit"
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
              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-300/85 max-w-[390px] font-normal mb-6">
                TurfPlay is a sports management platform in Bangladesh designed to help turf owners organize daily bookings, manage slots, and grow their sports venue.
              </p>

              {/* Company Deck Download Card */}
              <a
                href="#download-deck"
                onClick={(e) => {
                  e.preventDefault();
                  alert('TurfPlay Company Deck (PDF, 3MB) download starting...');
                }}
                className="group inline-flex items-center gap-3.5 cursor-pointer w-fit p-2 -ml-2 rounded-2xl hover:bg-emerald-950/40 border border-transparent hover:border-emerald-800/30 transition-all"
              >
                {/* Vibrant lime-green circular download icon button */}
                <div className="w-10 h-10 rounded-full bg-[#8ae046] group-hover:bg-[#9def52] text-slate-950 flex items-center justify-center shrink-0 shadow-lg shadow-[#8ae046]/25 transition-transform duration-200 group-hover:scale-105 active:scale-95">
                  <Download size={18} strokeWidth={2.4} className="group-hover:translate-y-0.5 transition-transform" />
                </div>

                {/* Text */}
                <div className="flex flex-col text-left">
                  <span className="text-white text-xs sm:text-sm font-bold tracking-tight group-hover:text-[#00E575] transition-colors">
                    Company Deck
                  </span>
                  <span className="text-[11px] text-slate-400 group-hover:text-slate-300 transition-colors font-medium">
                    PDF, 3MB
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: For Contact */}
          <div className="lg:col-span-4 lg:pl-6">
            <h3 className="text-white text-sm sm:text-base font-bold tracking-tight mb-4">
              For Contact
            </h3>

            <div className="space-y-3.5 text-xs sm:text-[13px] text-slate-300/90">
              {/* Phone */}
              <a
                href="tel:+8801611920991"
                className="flex items-center gap-3 group hover:text-white transition-colors"
              >
                <Phone size={16} strokeWidth={2} className="text-[#00E575] group-hover:text-emerald-300 transition-colors shrink-0" />
                <span className="text-slate-200 group-hover:text-[#00E575] transition-colors font-medium">
                  +880 1611-920991
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:turfplayofficial@gmail.com"
                className="flex items-center gap-3 group hover:text-white transition-colors"
              >
                <Mail size={16} strokeWidth={2} className="text-[#00E575] group-hover:text-emerald-300 transition-colors shrink-0" />
                <span className="text-slate-200 group-hover:text-[#00E575] transition-colors font-medium">
                  turfplayofficial@gmail.com
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

        {/* Centered Copyright Line */}
        <div className="text-center pt-6 pb-2 border-t border-emerald-950/60">
          <p className="text-[11px] sm:text-xs text-slate-400/80 font-normal tracking-wide">
            © Copyright {currentYear} TurfPlay All Rights Reserved. | Powered by TurfPlay
          </p>
        </div>

      </div>
    </footer>
  );
};
