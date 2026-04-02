import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => setIsOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'backdrop-blur-xl shadow-lg'
        : 'bg-transparent'
    }`}
      style={scrolled ? {
        backgroundColor: 'rgba(15,15,15,0.7)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      } : {}}
    >
      <div className="section-wrapper flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center shadow-lg transition-shadow"
            style={{ boxShadow: '0 4px 14px rgba(239,68,68,0.3)' }}
          >
            <span className="text-white font-bold text-sm">QD</span>
          </div>
          <span className="font-bold text-lg text-txt-primary hidden sm:block">
            Quoc<span className="text-accent">Dat</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-lg text-sm font-medium text-txt-secondary hover:text-accent transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a href="/cv.pdf" download="CV_QuocDat_Frontend_Developer.pdf" className="ml-3 btn-primary !py-2.5 !px-5 !text-xs">
            <Download size={14} /> Download CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-txt-secondary hover:text-txt-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden backdrop-blur-xl overflow-hidden"
            style={{
              backgroundColor: 'rgba(15,15,15,0.95)',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <div className="section-wrapper py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleClick}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-txt-secondary hover:text-accent transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a href="/cv.pdf" download="CV_QuocDat_Frontend_Developer.pdf" className="btn-primary w-full justify-center mt-3 !text-xs">
                <Download size={14} /> Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
