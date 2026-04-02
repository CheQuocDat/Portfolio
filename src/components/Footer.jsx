import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8" style={{
      backgroundColor: '#0F0F0F',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div className="section-wrapper">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-txt-muted">
            <span>© {new Date().getFullYear()} Quoc Dat.</span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </div>

          <p className="flex items-center gap-1.5 text-sm text-txt-muted">
            Built with <Heart size={13} className="text-accent fill-current" /> using
            <span className="font-medium text-txt-secondary">React</span> +
            <span className="font-medium text-txt-secondary">Vite</span> +
            <span className="font-medium text-txt-secondary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
