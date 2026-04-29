import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Phone, Menu, X, Shield, Hammer, Droplets } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Roofing', href: '#roofing' },
    { label: 'Siding', href: '#siding' },
    { label: 'Gutters', href: '#gutters' },
    { label: 'About Us', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-lg border-b border-black/5 py-3 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform shadow-lg shadow-gold/20">
            <Shield className="text-white" size={24} />
          </div>
          <div>
            <span className="text-xl font-display font-bold block leading-none tracking-tight text-text-main">DYNAMIC <span className="text-gold">ROOFING</span></span>
            <span className="text-[10px] tracking-[0.2em] font-accent text-text-muted uppercase">North Carolina</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-sm font-semibold text-text-muted hover:text-gold transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="tel:+1234567890" 
            className="flex items-center gap-2 bg-text-main text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gold transition-all shadow-md"
          >
            <Phone size={16} />
            <span>(919) 555-0123</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-text-main"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-gray-deep border-b border-white/5 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-lg font-semibold text-white hover:text-gold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="tel:+1234567890" 
              className="mt-2 flex items-center justify-center gap-2 bg-gold text-gray-deep px-6 py-3 rounded-full font-bold shadow-lg"
            >
              <Phone size={18} />
              <span>Call Us Now</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
