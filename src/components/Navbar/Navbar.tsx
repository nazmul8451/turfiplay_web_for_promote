import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Smartphone, Building2, HelpCircle, Home, Sparkles } from 'lucide-react';
import logoImg from '../../assets/images/sports/Layer_1.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'হোম', href: 'home', icon: Home, badge: null },
    { name: 'খেলোয়াড়দের জন্য', href: 'how-it-works', icon: Smartphone, badge: 'Player' },
    { name: 'টার্ফ মালিকদের জন্য', href: 'partner', icon: Building2, badge: 'Owner' },
    { name: 'প্রশ্নোত্তর', href: 'faq', icon: HelpCircle, badge: null },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsScrolled(currentScrollY > 20);

          // Section tracking for active state
          const scrollPosition = currentScrollY + 250;
          
          if (currentScrollY < 120) {
            setActiveSection('home');
          } else {
            for (const item of navItems) {
              const element = document.getElementById(item.href);
              if (element) {
                const top = element.offsetTop;
                const height = element.offsetHeight;
                if (scrollPosition >= top && scrollPosition < top + height) {
                  setActiveSection(item.href);
                  break;
                }
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-4 px-3 md:px-6 lg:px-12 pointer-events-none">
      <nav 
        className={`pointer-events-auto max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex justify-between items-center rounded-full transition-all duration-300 backdrop-blur-2xl ${
          isScrolled 
            ? 'bg-white/85 border border-white/90 shadow-[0_12px_36px_rgba(0,0,0,0.12)]' 
            : 'bg-white/75 border border-white/80 shadow-[0_8px_25px_rgba(0,0,0,0.06)]'
        }`}
      >
        {/* Logo */}
        <div
          className="flex items-center gap-2.5 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src={logoImg}
            alt="TurfPlay Logo"
            className="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <span className="font-serif text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-[#00A859] transition-colors">
            Turf<span className="italic text-[#00A859]">Play</span>
          </span>
        </div>

        {/* Desktop Links (Stable, Calm, No Jittering) */}
        <div className="hidden lg:flex items-center gap-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            const IconComponent = item.icon;

            return (
              <a
                key={item.href}
                href={`#${item.href}`}
                className={`relative px-4 py-2 text-[11px] xl:text-[12px] font-extrabold tracking-wider rounded-full transition-all duration-200 uppercase select-none flex items-center gap-2 ${
                  isActive
                    ? 'text-[#00A859] bg-[#00A859]/10 border border-[#00A859]/30 shadow-xs'
                    : 'text-slate-700 hover:text-[#00A859] hover:bg-slate-100/60 border border-transparent'
                }`}
              >
                <IconComponent 
                  size={14} 
                  className={isActive ? "text-[#00A859]" : "text-slate-400 group-hover:text-[#00A859]"} 
                />

                <span className={isActive ? "text-[#00A859] font-black" : ""}>
                  {item.name}
                </span>

                {item.badge && (
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-tighter ${
                    item.badge === 'Player' 
                      ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                      : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#waitlist"
            className="group relative overflow-hidden px-5 py-2 bg-[#00A859] hover:bg-[#008f4c] text-white font-black rounded-full transition-all duration-200 shadow-md shadow-[#00A859]/25 hover:shadow-lg hover:shadow-[#00A859]/35 hover:scale-[1.02] active:scale-[0.98] text-xs flex items-center gap-1.5 uppercase tracking-wider"
          >
            <Sparkles size={13} className="animate-pulse" />
            <span>ওয়েটলিস্টে যোগ দিন</span>
            <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-2.5">
          <a
            href="#waitlist"
            className="px-3.5 py-1.5 bg-[#00A859] text-white font-extrabold rounded-full text-[11px] uppercase tracking-wider shadow-sm"
          >
            ওয়েটলিস্ট
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none z-50 text-slate-900 cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span
              className={`w-5 h-0.5 bg-slate-900 rounded-full transition-transform duration-200 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-slate-900 rounded-full transition-opacity duration-200 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-slate-900 rounded-full transition-transform duration-200 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Glass Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.96 }}
            animate={{ opacity: 1, height: "auto", scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto lg:hidden max-w-6xl mx-auto mt-2 bg-white/90 backdrop-blur-2xl rounded-3xl border border-white/80 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-5 space-y-3">
              {navItems.map((item) => {
                const IconComp = item.icon;
                const isActive = activeSection === item.href;

                return (
                  <a
                    key={item.href}
                    href={`#${item.href}`}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between py-2 text-sm font-extrabold uppercase tracking-wider transition-colors ${
                      isActive ? 'text-[#00A859]' : 'text-slate-700 hover:text-[#00A859]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <IconComp size={16} className={isActive ? "text-[#00A859]" : "text-slate-400"} />
                      <span>{item.name}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-tighter ${
                        item.badge === 'Player' 
                          ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                          : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </a>
                );
              })}

              <div className="pt-2">
                <a
                  href="#waitlist"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-3 bg-[#00A859] hover:bg-[#008f4c] text-white font-extrabold rounded-full uppercase tracking-wider text-xs shadow-md shadow-[#00A859]/25 active:scale-95 transition-all"
                >
                  ওয়েটলিস্টে যোগ দিন
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
