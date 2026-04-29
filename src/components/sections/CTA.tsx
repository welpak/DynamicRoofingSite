import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gold/10" />
      
      <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 relative z-10 text-center shadow-2xl shadow-black/5">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
        >
          <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Ready to start?</span>
          <h2 className="text-4xl md:text-6xl font-display font-medium mb-8 leading-tight text-text-main">
            Schedule Your <br />
            <span className="gold-gradient italic">Complimentary</span> Inspection
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
            {[
              'Comprehensive Roofing Analysis',
              'Siding Integrity Check',
              'Gutter Flow Assessment'
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 text-text-muted">
                <CheckCircle2 className="text-gold" size={20} />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="px-12 py-5 bg-text-main text-white rounded-full font-bold text-lg hover:bg-gold transition-all shadow-xl shadow-black/10">
              Claim Your Free Consultation
            </button>
            <button className="px-12 py-5 bg-white text-text-main rounded-full font-bold text-lg border border-black/5 hover:bg-gray-50 transition-all shadow-sm">
              See Our Catalog
            </button>
          </div>
          
          <p className="mt-10 text-text-muted text-sm">
            No obligation. No pressure. Just expert advice for your most valuable asset.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
