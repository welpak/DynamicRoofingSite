import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import FloatingGold from '@/src/components/interactive/FloatingGold';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
      <FloatingGold />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-text-muted">Trusted By 500+ NC Residents</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-medium leading-[1] mb-8 text-text-main">
            Elevate Your <br />
            <span className="gold-gradient italic">Home's Skyline.</span>
          </h1>
          
          <p className="text-xl text-text-muted max-w-xl mb-10 leading-relaxed font-light">
            Dynamic Roofing NC brings architectural excellence to every shingle. 
            Premium roofing, siding, and gutters crafted for North Carolina's finest homes.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-text-main text-white rounded-full font-bold flex items-center gap-2 group hover:bg-gold transition-all shadow-xl shadow-black/10"
            >
              Get Free Estimate
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#roofing" 
              className="px-8 py-4 bg-white border border-black/5 text-text-main rounded-full font-bold hover:bg-gray-50 transition-all shadow-sm"
            >
              Our Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:block relative"
        >
          <div className="relative z-10 w-full aspect-[4/5] rounded-[3rem] overflow-hidden gold-border bg-white rotate-2 transition-transform hover:rotate-0 duration-700 cursor-pointer group shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            {/* Using the uploaded high-quality image of the neighborhood */}
            <img 
              src="https://dynamic-roofing-nc.com/media/photo/roof7_2.jpg" 
              alt="Luxury Neighborhood Project" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-10">
              <span className="text-gold font-bold text-sm tracking-widest uppercase mb-2">Featured Project</span>
              <h3 className="text-2xl font-display font-medium text-white">Baleigh Heights Residence</h3>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 blur-[60px] rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/5 blur-[60px] rounded-full" />
        </motion.div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20" />
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
