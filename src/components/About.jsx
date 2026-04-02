import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Target, BookOpen } from 'lucide-react';

const infoCards = [
  { icon: MapPin, label: 'Location', value: 'Ho Chi Minh City, Vietnam' },
  { icon: GraduationCap, label: 'Education', value: 'Final-year IT Student' },
  { icon: Target, label: 'Career Goal', value: 'Frontend Developer' },
  { icon: BookOpen, label: 'English', value: 'Reading tech documentation' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden" style={{ backgroundColor: '#121212' }}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle top glow — carries warmth from hero */}
        <div className="ambient-glow" style={{
          top: '-15%',
          left: '20%',
          width: '500px',
          height: '400px',
          background: 'rgba(239,68,68,0.03)',
        }} />
        {/* Right-side faint glow near info cards */}
        <div className="ambient-glow" style={{
          top: '30%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'rgba(255,255,255,0.015)',
        }} />
        {/* Bottom separator glow */}
        <div className="section-glow-divider" style={{ bottom: 0 }} />
      </div>

      <div className="section-wrapper relative" style={{ zIndex: 1 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <motion.p variants={fadeUp} className="text-sm font-semibold text-accent tracking-wider uppercase">About Me</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="section-title mt-2">Get to know me</motion.h2>

          <div className="mt-12 grid lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Text */}
            <motion.div variants={fadeUp} custom={2} className="lg:col-span-3 space-y-5">
              <p className="text-txt-secondary leading-relaxed text-base">
                I'm a <span className="font-semibold text-txt-primary">final-year IT student</span> with a strong passion for frontend development. I enjoy building responsive, modern web interfaces that feel intuitive and visually polished.
              </p>
              <p className="text-txt-secondary leading-relaxed text-base">
                My focus areas include <span className="font-semibold text-txt-primary">ReactJS</span>, <span className="font-semibold text-txt-primary">JavaScript (ES6+)</span>, and <span className="font-semibold text-txt-primary">Tailwind CSS</span>. I pay close attention to spacing, typography, component structure, and overall user experience.
              </p>
              <p className="text-txt-secondary leading-relaxed text-base">
                I'm eager to learn, open to feedback, and actively looking for <span className="font-semibold text-txt-primary">internship or junior frontend opportunities</span> where I can contribute and grow as a developer.
              </p>
            </motion.div>

            {/* Info Cards */}
            <motion.div variants={fadeUp} custom={3} className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {infoCards.map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  custom={4 + i}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                  style={{
                    backgroundColor: '#1A1A1A',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'rgba(239,68,68,0.1)' }}
                  >
                    <item.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-txt-muted uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-semibold text-txt-primary">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
