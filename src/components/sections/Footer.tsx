import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-24 pb-12 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-display font-bold block leading-none tracking-tight underline decoration-gold underline-offset-8 text-text-main">DYNAMIC</span>
            </a>
            <p className="text-text-muted mb-8 leading-relaxed font-light">
              Premium roofing solutions for the Carolinas. 
              Quality craftsmanship meets modern architectural design.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-text-main">Services</h4>
            <ul className="space-y-4 text-text-muted text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Residential Roofing</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Emergency Roof Repair</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Storm Damage Assessment</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Modern Vinyl Siding</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">James Hardie Board</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Seamless Gutter Install</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-text-main">Quick Links</h4>
            <ul className="space-y-4 text-text-muted text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Our Recent Work</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Request a Quote</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Service Areas</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-text-main">Contact</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-gold shrink-0" size={20} />
                <span className="text-sm text-text-muted">123 Skylight Way, Suite 400<br />Raleigh, NC 27601</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-gold shrink-0" size={20} />
                <span className="text-sm text-text-muted font-bold text-text-main">(919) 555-0123</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-gold shrink-0" size={20} />
                <span className="text-sm text-text-muted">hello@dynamicroofingnc.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-text-muted uppercase tracking-widest">
            © 2026 Dynamic Roofing NC. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-text-muted uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
