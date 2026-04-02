import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';
import avatar from '../assets/avatar.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: 'transparent' }}>
      {/* ===== HERO BACKGROUND LAYERS ===== */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>

        {/* Hero-specific denser grid pattern with radial fade */}
        <div className="hero-grid" />

        {/* GLOW 1: White radial glow behind text (left side) — creates focus */}
        <div className="ambient-glow" style={{
          top: '18%',
          left: '5%',
          width: '650px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 40%, transparent 70%)',
          filter: 'blur(90px)',
        }} />

        {/* GLOW 2: Red spotlight behind avatar (right side) — strongest glow */}
        <div className="ambient-glow" style={{
          top: '15%',
          right: '2%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(239,68,68,0.06) 35%, rgba(220,38,38,0.02) 55%, transparent 75%)',
          filter: 'blur(80px)',
        }} />

        {/* GLOW 3: Subtle warm lift under buttons/stats area */}
        <div className="ambient-glow" style={{
          bottom: '20%',
          left: '15%',
          width: '400px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(239,68,68,0.04) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }} />

        {/* Bottom gradient fade — smooth transition to About section */}
        <div className="absolute bottom-0 left-0 right-0 h-40" style={{
          background: 'linear-gradient(to bottom, transparent, #121212)',
        }} />

        {/* Left edge accent line — subtle vertical glow */}
        <div className="absolute top-1/4 left-0 w-px h-1/2" style={{
          background: 'linear-gradient(to bottom, transparent, rgba(239,68,68,0.15), transparent)',
        }} />

        {/* Right edge faint accent */}
        <div className="absolute top-1/3 right-0 w-px h-1/3" style={{
          background: 'linear-gradient(to bottom, transparent, rgba(239,68,68,0.08), transparent)',
        }} />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="section-wrapper w-full py-32 sm:py-0" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-accent">Open to opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-txt-primary">
              Hi, I'm{' '}
              <span className="text-accent">Quoc Dat</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-txt-secondary mt-2 block">
                Frontend Developer
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-txt-secondary leading-relaxed max-w-lg">
              I build responsive, user-friendly web interfaces with{' '}
              <span className="font-medium text-txt-primary">React</span>,{' '}
              <span className="font-medium text-txt-primary">JavaScript</span>, and{' '}
              <span className="font-medium text-txt-primary">Tailwind CSS</span>.
              Passionate about clean UI, smooth interactions, and great user experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                <ExternalLink size={16} /> View Projects
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </div>

            {/* Quick stats */}
            <div className="mt-10 flex items-center gap-8">
              {[
                { value: '4+', label: 'Projects' },
                { value: '6+', label: 'Technologies' },
                { value: '1+', label: 'Year Learning' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-txt-primary">{stat.value}</p>
                  <p className="text-sm text-txt-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Deep ambient red glow behind avatar — primary depth layer */}
              <div className="absolute rounded-full" style={{
                inset: '-60px',
                background: 'radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 40%, transparent 65%)',
                filter: 'blur(50px)',
              }} />
              {/* Inner subtle warm ring */}
              <div className="absolute rounded-3xl" style={{
                inset: '-20px',
                background: 'radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 55%)',
                filter: 'blur(25px)',
              }} />

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-3xl overflow-hidden"
                style={{
                  border: '2px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 0 100px rgba(239,68,68,0.08)',
                }}
              >
                <img
                  src={avatar}
                  alt="Quoc Dat — Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge — React Developer */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-xl flex items-center gap-2"
                style={{
                  backgroundColor: 'rgba(31,31,31,0.9)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <span className="text-lg">⚛️</span>
                <span className="text-sm font-semibold text-txt-primary">React Developer</span>
              </motion.div>

              {/* Floating badge — UI/UX */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute -top-2 -right-2 px-3 py-2 rounded-xl flex items-center gap-2"
                style={{
                  backgroundColor: 'rgba(31,31,31,0.9)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <span className="text-lg">🎨</span>
                <span className="text-sm font-semibold text-txt-primary">UI/UX</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full text-txt-muted hover:text-accent transition-colors"
        style={{ zIndex: 2 }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
