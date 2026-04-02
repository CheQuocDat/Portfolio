import { motion } from 'framer-motion';
import { Mail, GitBranch, Link2, Phone, Copy, Check, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'quocdat.contact@gmail.com',
    href: 'mailto:quocdat.contact@gmail.com',
    copyable: true,
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    value: 'github.com/chequocdat',
    href: 'https://github.com/chequocdat',
    copyable: false,
  },
  {
    icon: Link2,
    label: 'LinkedIn',
    value: 'linkedin.com/in/chequocdat',
    href: 'https://linkedin.com/in/chequocdat',
    copyable: false,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+84 985 266 194',
    href: 'tel:+84985266194',
    copyable: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function Contact() {
  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleCopy = (value, idx) => {
    navigator.clipboard.writeText(value);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0F0F0F' }}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Center ambient glow */}
        <div className="ambient-glow" style={{
          top: '20%',
          left: '30%',
          width: '500px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(239,68,68,0.04) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }} />
        {/* Bottom ambient — fades into footer */}
        <div className="ambient-glow" style={{
          bottom: '-20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'rgba(220,38,38,0.025)',
        }} />
        {/* Top separator */}
        <div className="section-glow-divider" style={{ top: 0 }} />
      </div>

      <div className="section-wrapper relative" style={{ zIndex: 1 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <motion.p variants={fadeUp} className="text-sm font-semibold text-accent tracking-wider uppercase">Contact</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="section-title mt-2">Get In Touch</motion.h2>
          <motion.p variants={fadeUp} custom={2} className="section-subtitle">
            I'm currently open to <span className="font-semibold text-txt-primary">internship and junior frontend opportunities</span>.
            Feel free to reach out — I'd love to hear from you.
          </motion.p>

          <div className="mt-12 max-w-2xl">
            <div className="grid sm:grid-cols-2 gap-4">
              {contacts.map((contact, i) => (
                <motion.div
                  key={contact.label}
                  variants={fadeUp}
                  custom={3 + i}
                  className="card p-5 flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                    style={{ backgroundColor: 'rgba(239,68,68,0.1)' }}
                  >
                    <contact.icon size={20} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-txt-muted uppercase tracking-wider">{contact.label}</p>
                    <a href={contact.href} target="_blank" rel="noopener noreferrer" 
                      className="text-sm font-semibold text-txt-primary hover:text-accent transition-colors truncate block">
                      {contact.value}
                    </a>
                  </div>
                  {contact.copyable ? (
                    <button
                      onClick={() => handleCopy(contact.value, i)}
                      className="p-2 rounded-lg text-txt-muted hover:text-accent transition-all shrink-0"
                      aria-label={`Copy ${contact.label}`}
                    >
                      {copiedIdx === i ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                  ) : (
                    <a href={contact.href} target="_blank" rel="noopener noreferrer"
                      className="p-2 rounded-lg text-txt-muted hover:text-accent transition-all shrink-0"
                      aria-label={`Visit ${contact.label}`}>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
