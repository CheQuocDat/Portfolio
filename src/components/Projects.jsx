import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';
import projects from '../data/projects';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden" style={{ backgroundColor: '#121212' }}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large center glow — highlights project showcase area */}
        <div className="ambient-glow" style={{
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '600px',
          background: 'radial-gradient(ellipse, rgba(239,68,68,0.04) 0%, transparent 70%)',
          filter: 'blur(120px)',
        }} />
        {/* Top-right corner subtle glow */}
        <div className="ambient-glow" style={{
          top: '-5%',
          right: '0%',
          width: '350px',
          height: '350px',
          background: 'rgba(255,255,255,0.02)',
        }} />
        {/* Top separator */}
        <div className="section-glow-divider" style={{ top: 0 }} />
        {/* Bottom separator */}
        <div className="section-glow-divider" style={{ bottom: 0 }} />
      </div>

      <div className="section-wrapper relative" style={{ zIndex: 1 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <motion.p variants={fadeUp} className="text-sm font-semibold text-accent tracking-wider uppercase">Projects</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="section-title mt-2">Featured Work</motion.h2>
          <motion.p variants={fadeUp} custom={2} className="section-subtitle">A selection of projects I've built to practice and showcase my frontend skills.</motion.p>

          <div className="mt-12 grid md:grid-cols-2 gap-7">
            {projects.map((project, i) => (
              <motion.article
                key={project.id}
                variants={fadeUp}
                custom={3 + i}
                className="card group overflow-hidden flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover links */}
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="p-2 rounded-lg backdrop-blur-sm text-txt-primary hover:text-accent shadow-sm transition-colors"
                        style={{ backgroundColor: 'rgba(31,31,31,0.9)' }}
                        aria-label="Live demo">
                        <ExternalLink size={15} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="p-2 rounded-lg backdrop-blur-sm text-txt-primary hover:text-accent shadow-sm transition-colors"
                        style={{ backgroundColor: 'rgba(31,31,31,0.9)' }}
                        aria-label="Source code">
                        <GitBranch size={15} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-6">
                  <h3 className="text-lg font-bold text-txt-primary group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="mt-2 text-sm text-txt-secondary leading-relaxed flex-1">{project.description}</p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>

                  {/* Highlights */}
                  {project.highlights && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.highlights.map((h) => (
                        <span key={h} className="px-2.5 py-1 rounded-md text-xs font-medium"
                          style={{
                            backgroundColor: 'rgba(16,185,129,0.1)',
                            color: '#34D399',
                            border: '1px solid rgba(16,185,129,0.15)',
                          }}
                        >{h}</span>
                      ))}
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="mt-5 flex gap-3">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="btn-primary !py-2.5 !px-4 !text-xs flex-1 justify-center">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="btn-outline !py-2.5 !px-4 !text-xs flex-1 justify-center">
                        <GitBranch size={14} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
