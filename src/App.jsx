import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WhyHireMe from './components/WhyHireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* ===== BACKGROUND LAYER STACK ===== */}

      {/* Layer 1: Full-page subtle grid */}
      <div className="full-grid" />

      {/* Layer 2: Global ambient blur shapes */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        {/* Top-right corner — red blur shape */}
        <div className="ambient-glow" style={{
          top: '-8%',
          right: '-4%',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(239,68,68,0.12) 0%, rgba(239,68,68,0.04) 40%, transparent 70%)',
          filter: 'blur(140px)',
        }} />
        {/* Bottom-left corner — soft white blur shape */}
        <div className="ambient-glow" style={{
          bottom: '5%',
          left: '-8%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 70%)',
          filter: 'blur(120px)',
        }} />
        {/* Mid-page subtle red accent */}
        <div className="ambient-glow" style={{
          top: '45%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'rgba(220,38,38,0.025)',
          filter: 'blur(130px)',
        }} />
      </div>

      {/* Layer 3: Noise texture */}
      <div className="noise-overlay" />

      {/* Layer 4: Vignette */}
      <div className="page-vignette" />

      {/* ===== MAIN CONTENT ===== */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <WhyHireMe />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
