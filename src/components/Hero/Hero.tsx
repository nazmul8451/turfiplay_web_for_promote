import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import homeMockImg from '../../assets/homemock.png';
import appstoreImg from '../../assets/images/sports/appstore.png';
import playstoreImg from '../../assets/images/sports/palystore.png';
import { AppStoreModal } from '../Modals/AppStoreModal';

gsap.registerPlugin(ScrollTrigger);

/* ── tiny canvas particle system ── */
const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: -Math.random() * 0.4 - 0.1,
      opacity: Math.random() * 0.35 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,168,89,${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

/* ── stat item ── */
const Stat = ({ value, label, delay }: { value: string; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col"
  >
    <span className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{value}</span>
    <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">{label}</span>
  </motion.div>
);

/* ══════════════════════════════════════════════
   HERO (Clean Main Home Mockup Display)
══════════════════════════════════════════════ */
export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerPhoneRef = useRef<HTMLDivElement>(null);
  const [isAppStoreModalOpen, setIsAppStoreModalOpen] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !centerPhoneRef.current) return;

    const ctx = gsap.context(() => {
      // Keep main phone mockup stable during scroll
      gsap.to(centerPhoneRef.current, {
        scale: 1.01,
        y: -5,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F6FBF8] to-[#FFFFFF] pt-20">

      {/* ── LIGHT AMBIENT BACKGROUND GLOW ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-gradient-to-tr from-[#00A859]/10 via-[#00A859]/5 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#00A859]/8 blur-[100px] rounded-full" />
        <ParticleCanvas />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 md:px-16 lg:px-20 pt-24 sm:pt-28 pb-16 sm:pb-20 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-12">

          {/* ── LEFT: TEXT ── */}
          <div className="flex-1 lg:max-w-[55%]">

            {/* Launching soon badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 bg-[#00A859]/10 border border-[#00A859]/25 rounded-full mb-5 sm:mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#00A859] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold text-[#00A859] uppercase tracking-wider">
                স্পোর্টস টার্ফের সম্পূর্ণ ডিজিটাল ম্যানেজমেন্ট সিস্টেম
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="tracking-tight leading-[1.08] mb-6 sm:mb-8">
                <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900">
                  আপনার টার্ফ চালান
                </span>
                <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic text-[#00A859] font-normal mt-1">
                  কোনো ঝামেলা ছাড়াই।
                </span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mb-8 sm:mb-10"
            >
              খেলা বুকিং করা হোক কিংবা সম্পূর্ণ টার্ফ ব্যবসা পরিচালনা—TurfPlay নিয়ে এসেছে সব সমাধান এক প্ল্যাটফর্মে। বুকিং নেওয়া, পেমেন্ট গ্রহণ এবং শিডিউল নিয়ন্ত্রণ করুন একদম সহজে।
            </motion.p>

            {/* Download Buttons & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-14"
            >
              <a
                href="#waitlist"
                className="group relative overflow-hidden px-7 py-3.5 sm:py-4 bg-[#00A859] text-white font-extrabold rounded-2xl sm:rounded-full transition-all duration-300 shadow-lg shadow-[#00A859]/25 hover:bg-[#008746] hover:shadow-xl hover:shadow-[#00A859]/35 hover:scale-[1.02] tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2.5 text-center"
              >
                <span>আর্লি অ্যাক্সেস নিন</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setIsAppStoreModalOpen(true)}
                  className="flex-1 sm:flex-initial flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3 px-4 py-2.5 sm:py-3 bg-white border border-slate-200 hover:border-[#00A859]/40 hover:bg-[#00A859]/5 hover:scale-[1.02] transition-all duration-300 rounded-2xl shadow-sm text-left cursor-pointer"
                >
                  <img 
                    src={appstoreImg} 
                    alt="App Store Logo" 
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain" 
                  />
                  <div className="flex flex-col items-start leading-none pr-1">
                    <span className="text-[8px] sm:text-[9px] text-slate-400 font-semibold uppercase tracking-wider mb-1">Download on</span>
                    <span className="text-xs sm:text-sm text-slate-900 font-black tracking-tight">App Store</span>
                  </div>
                </button>

                <a
                  href="https://play.google.com/store/apps/details?id=com.turfplay.app&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3 px-4 py-2.5 sm:py-3 bg-white border border-slate-200 hover:border-[#00A859]/40 hover:bg-[#00A859]/5 hover:scale-[1.02] transition-all duration-300 rounded-2xl shadow-sm"
                >
                  <img 
                    src={playstoreImg} 
                    alt="Google Play Logo" 
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain" 
                  />
                  <div className="flex flex-col items-start leading-none pr-1">
                    <span className="text-[8px] sm:text-[9px] text-slate-400 font-semibold uppercase tracking-wider mb-1">Get it on</span>
                    <span className="text-xs sm:text-sm text-slate-900 font-black tracking-tight">Google Play</span>
                  </div>
                </a>
              </div>
            </motion.div>

            <AppStoreModal
              isOpen={isAppStoreModalOpen}
              onClose={() => setIsAppStoreModalOpen(false)}
            />

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 sm:flex items-center gap-4 sm:gap-8 md:gap-12 pt-4 border-t border-slate-100 sm:border-0"
            >
              <Stat value="৫০০+" label="প্রস্তুত টার্ফ" delay={0.65} />
              <div className="hidden sm:block w-px h-10 bg-slate-200" />
              <Stat value="১০K+" label="বুকিং/মাস" delay={0.75} />
              <div className="hidden sm:block w-px h-10 bg-slate-200" />
              <Stat value="৯৯.৯%" label="সার্ভিস আপটাইম" delay={0.85} />
            </motion.div>
          </div>

          {/* ── RIGHT: MAIN HOME MOCKUP (Visible on ALL screens, beautifully centered on mobile) ── */}
          <div className="flex-1 relative flex items-center justify-center mt-6 lg:mt-0" style={{ minHeight: '380px' }}>
            {/* Ambient Glow rings */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] rounded-full border border-[#00A859]/20 bg-[#00A859]/5 blur-md"
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full border border-[#00A859]/10"
            />

            {/* Center Main Home Mockup */}
            <div ref={centerPhoneRef} className="relative z-20 transition-transform duration-300 flex items-center justify-center">
              <img
                src={homeMockImg}
                alt="TurfPlay Home App Mockup"
                className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[310px] xl:max-w-[330px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,168,89,0.18)]"
              />
            </div>

          </div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.4em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} className="text-[#00A859]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
