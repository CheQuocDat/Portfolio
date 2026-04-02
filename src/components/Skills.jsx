import { motion } from 'framer-motion';
import {
  Code2, Palette, Wrench, Globe,
  FileCode, Braces, Smartphone, Layers, Zap,
  GitBranch, PenLine, Monitor, Search, Send,
  LayoutGrid, Type, Sparkles, PenTool,
} from 'lucide-react';

const skillGroups = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'HTML5', icon: FileCode },
      { name: 'CSS3', icon: Palette },
      { name: 'JavaScript (ES6+)', icon: Braces },
      { name: 'ReactJS', icon: Layers },
      { name: 'Vite', icon: Zap },
    ],
  },
  {
    title: 'UI/UX & Styling',
    icon: PenTool,
    skills: [
      { name: 'Tailwind CSS', icon: Sparkles },
      { name: 'Responsive Design', icon: Smartphone },
      { name: 'UI Components', icon: LayoutGrid },
      { name: 'Layout & Spacing', icon: Type },
      { name: 'Basic Animation', icon: Zap },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git / GitHub', icon: GitBranch },
      { name: 'Figma', icon: PenLine },
      { name: 'VS Code', icon: Monitor },
      { name: 'Chrome DevTools', icon: Search },
      { name: 'Postman', icon: Send },
    ],
  },
  {
    title: 'Other',
    icon: Globe,
    skills: [
      { name: 'REST API Integration', icon: Globe },
      { name: 'English Documentation', icon: FileCode },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0F0F0F' }}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Center-left subtle glow */}
        <div className="ambient-glow" style={{
          top: '20%',
          left: '-8%',
          width: '450px',
          height: '450px',
          background: 'rgba(239,68,68,0.03)',
        }} />
        {/* Bottom-right faint glow */}
        <div className="ambient-glow" style={{
          bottom: '10%',
          right: '-5%',
          width: '350px',
          height: '350px',
          background: 'rgba(255,255,255,0.015)',
        }} />
        {/* Top separator glow */}
        <div className="section-glow-divider" style={{ top: 0 }} />
        {/* Bottom separator glow */}
        <div className="section-glow-divider" style={{ bottom: 0 }} />
      </div>

      <div className="section-wrapper relative" style={{ zIndex: 1 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <motion.p variants={fadeUp} className="text-sm font-semibold text-accent tracking-wider uppercase">Skills</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="section-title mt-2">My Tech Stack</motion.h2>
          <motion.p variants={fadeUp} custom={2} className="section-subtitle">Technologies and tools I use to bring ideas to life.</motion.p>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.title}
                variants={fadeUp}
                custom={3 + gi}
                className="card p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(239,68,68,0.1)' }}
                  >
                    <group.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-txt-primary">{group.title}</h3>
                </div>

                <div className="space-y-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-colors group"
                    >
                      <skill.icon size={16} className="text-txt-muted group-hover:text-accent transition-colors" />
                      <span className="text-sm font-medium text-txt-secondary group-hover:text-txt-primary transition-colors">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
