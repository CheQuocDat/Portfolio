import { motion } from 'framer-motion';
import { Smartphone, Code2, Users, TrendingUp } from 'lucide-react';

const focuses = [
  {
    icon: Smartphone,
    title: 'Responsive UI',
    description: 'I build interfaces that look great across all devices — from mobile to desktop. Every layout is tested for real-world breakpoints.',
  },
  {
    icon: Code2,
    title: 'Clean Component Structure',
    description: 'My code is modular, readable, and maintainable. I follow React best practices with reusable components and clear separation of concerns.',
  },
  {
    icon: Users,
    title: 'User-Centered Design',
    description: 'I prioritize usability and intuitive interactions. Good UI means the user can accomplish tasks without thinking about the interface.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Learning',
    description: 'I stay updated with the latest frontend tools and patterns. Currently deepening my React, TypeScript, and performance optimization skills.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function WhyHireMe() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#121212' }}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Right-side ambient glow */}
        <div className="ambient-glow" style={{
          top: '15%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'rgba(239,68,68,0.03)',
        }} />
        {/* Bottom-left faint glow */}
        <div className="ambient-glow" style={{
          bottom: '-10%',
          left: '5%',
          width: '350px',
          height: '350px',
          background: 'rgba(255,255,255,0.015)',
        }} />
        {/* Top separator */}
        <div className="section-glow-divider" style={{ top: 0 }} />
        {/* Bottom separator */}
        <div className="section-glow-divider" style={{ bottom: 0 }} />
      </div>

      <div className="section-wrapper relative" style={{ zIndex: 1 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <motion.p variants={fadeUp} className="text-sm font-semibold text-accent tracking-wider uppercase">Why Hire Me</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="section-title mt-2">What I Focus On</motion.h2>
          <motion.p variants={fadeUp} custom={2} className="section-subtitle">Core values and principles that guide my work as a frontend developer.</motion.p>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {focuses.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={3 + i}
                className="card p-6 group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: 'rgba(239,68,68,0.1)' }}
                >
                  <item.icon size={22} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold text-txt-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-txt-secondary leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
