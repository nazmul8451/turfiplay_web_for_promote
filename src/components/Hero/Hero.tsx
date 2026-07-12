import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import mockup2 from '../../assets/images/mockup2.jpg';
import exploreImg from '../../assets/images/sports/explore.png';
import ownSiteImg from '../../assets/images/sports/own_site.png';
import bgImage from '../../assets/images/sports/bg.png';
import appstoreImg from '../../assets/images/sports/appstore.png';
import playstoreImg from '../../assets/images/sports/palystore.png';

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

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.4,
      dy: -Math.random() * 0.5 - 0.1,
      opacity: Math.random() * 0.4 + 0.1,
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

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

/* ── phone mockup component ── */
const Phone = ({
  src, alt, rotate, scale, zIndex, delay, x, y, opacity = 1
}: {
  src: string; alt: string; rotate: number; scale: number;
  zIndex: number; delay: number; x: number; y: number; opacity?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 60, rotate: rotate * 0.5 }}
    animate={{ opacity, y: 0, rotate }}
    transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
    style={{
      scale,
      zIndex,
      x,
      y,
      transformStyle: 'preserve-3d',
      backfaceVisibility: 'hidden',
      willChange: 'transform',
    }}
    className="absolute"
  >
    <div
      className="w-[230px] sm:w-[260px] md:w-[295px] aspect-[9/19.5] bg-[#0A0A0A] rounded-[3rem] p-[10px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
      style={{
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
      }}
    >
      {/* Screen */}
      <div
        className="w-full h-full rounded-[2.4rem] overflow-hidden bg-black relative"
        style={{
          transform: 'translate3d(0, 0, 0)',
          WebkitMaskImage: '-webkit-radial-gradient(white, black)',
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{
            imageRendering: '-webkit-optimize-contrast',
            transform: 'translate3d(0, 0, 0)',
          }}
        />
      </div>
      {/* Glow under phone */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-brand-green/25 blur-xl rounded-full" />
    </div>
  </motion.div>
);

/* ── stat item ── */
const Stat = ({ value, label, delay }: { value: string; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col"
  >
    <span className="text-3xl md:text-4xl font-black text-white tracking-tighter">{value}</span>
    <span className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] mt-1">{label}</span>
  </motion.div>
);

/* ══════════════════════════════════════════════
   HERO
══════════════════════════════════════════════ */
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── BACKGROUND IMAGE ── */}
      <div className="absolute inset-0 z-0">
        {/* The turf image */}
        <img
          src={bgImage}
          alt="Turf background"
          className="w-full h-full object-cover object-center"
        />
        {/* Strong dark overlay so text is readable */}
        <div className="absolute inset-0 bg-black/70" />
        {/* Green tint from bottom (turf glow) */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green/15 via-transparent to-black/40" />
        {/* Left side darkening for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        {/* Particles on top */}
        <ParticleCanvas />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pt-32 pb-24 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-0">

          {/* ── LEFT: TEXT ── */}
          <div className="flex-1 lg:max-w-[55%]">


            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-black uppercase tracking-tighter leading-[0.9] mb-8">
                <span
                  className="block text-[clamp(2rem,5vw,3.8rem)] text-white"
                  style={{ textShadow: '0 2px 30px rgba(0,0,0,0.8)' }}
                >
                  Run Your
                </span>
                <span
                  className="block text-[clamp(2rem,5vw,3.8rem)] text-white"
                  style={{ textShadow: '0 2px 30px rgba(0,0,0,0.8)' }}
                >
                  Turf
                </span>
                <span
                  className="block text-[clamp(2rem,5vw,3.8rem)] text-brand-green italic"
                  style={{
                    textShadow: '0 2px 30px rgba(0,0,0,0.8)',
                  }}
                >
                  Without
                </span>
                <span
                  className="block text-[clamp(2rem,5vw,3.8rem)] text-brand-green italic"
                  style={{
                    textShadow: '0 2px 30px rgba(0,0,0,0.8)',
                  }}
                >
                  Stress.
                </span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base md:text-lg text-white/55 font-medium leading-relaxed max-w-md mb-12"
            >
              Ditch the messy spreadsheets and WhatsApp group chaos. Automate bookings, track payments in real time, and keep your slots full with Bangladesh's most powerful turf management platform.
            </motion.p>

            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-row items-center gap-4 mb-16"
            >
              <a
                href="#download-appstore"
                className="flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 hover:border-brand-green/30 hover:bg-brand-green/5 hover:scale-[1.03] transition-all duration-300 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              >
                <img 
                  src={appstoreImg} 
                  alt="App Store Logo" 
                  className="w-6 h-6 object-contain" 
                />
                <div className="flex flex-col items-start leading-none pr-1">
                  <span className="text-[9px] text-white/40 font-semibold uppercase tracking-wider mb-1">Download on the</span>
                  <span className="text-sm text-white font-black tracking-tight">App Store</span>
                </div>
              </a>

              <a
                href="#download-playstore"
                className="flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 hover:border-brand-green/30 hover:bg-brand-green/5 hover:scale-[1.03] transition-all duration-300 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              >
                <img 
                  src={playstoreImg} 
                  alt="Google Play Logo" 
                  className="w-6 h-6 object-contain" 
                />
                <div className="flex flex-col items-start leading-none pr-1">
                  <span className="text-[9px] text-white/40 font-semibold uppercase tracking-wider mb-1">Get it on</span>
                  <span className="text-sm text-white font-black tracking-tight">Google Play</span>
                </div>
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-10"
            >
              <Stat value="500+" label="Turfs Ready" delay={0.65} />
              <div className="w-px h-10 bg-white/15" />
              <Stat value="10K+" label="Bookings/Month" delay={0.75} />
              <div className="w-px h-10 bg-white/15" />
              <Stat value="99%" label="Uptime" delay={0.85} />
            </motion.div>
          </div>

          {/* ── RIGHT: PHONES ── */}
          <div className="flex-1 relative hidden lg:flex items-center justify-center" style={{ minHeight: '640px' }}>
            {/* Glow rings */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-[340px] h-[340px] rounded-full border border-brand-green/25 bg-brand-green/5 blur-sm"
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute w-[500px] h-[500px] rounded-full border border-brand-green/10"
            />

            {/* Left phone */}
            <Phone
              src={exploreImg} alt="TurfiPlay Explore Screen"
              rotate={-12} scale={0.92} zIndex={10} delay={0.3}
              x={-190} y={20} opacity={1}
            />
            {/* Center phone (main) */}
            <Phone
              src={mockup2} alt="TurfiPlay Dashboard"
              rotate={0} scale={1.05} zIndex={20} delay={0.15}
              x={0} y={-20}
              opacity={1}
            />
            {/* Right phone */}
            <Phone
              src={ownSiteImg} alt="TurfiPlay Own Site Screen"
              rotate={12} scale={0.92} zIndex={10} delay={0.45}
              x={190} y={20} opacity={1}
            />

          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} className="text-white/30" />
        </motion.div>
      </motion.div>

      {/* ── Bottom fade into next section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-bg to-transparent z-10 pointer-events-none" />
    </section>
  );
};
