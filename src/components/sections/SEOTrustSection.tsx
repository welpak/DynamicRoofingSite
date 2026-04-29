import React from 'react';
import { motion } from 'motion/react';
import { Shield, Award, Users, Star } from 'lucide-react';

export default function SEOTrustSection() {
  return (
    <section className="py-12 md:py-16 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-stretch">
          
          {/* Card Area (Left on desktop, bottom on mobile) */}
          <div 
            className="order-2 lg:order-1 relative p-10 md:p-14 rounded-[3rem] border border-stone-200/60 shadow-[0_8px_40px_rgb(0,0,0,0.06)] overflow-hidden transition-all hover:shadow-[0_12px_50px_rgb(0,0,0,0.08)] h-full flex flex-col space-y-8 justify-between"
            style={{ 
              backgroundColor: '#faf9f6',
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E")`
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full -mr-10 -mt-10 blur-2xl pointer-events-none" />
            
            <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-serif italic relative z-10 flex-grow content-center">
              "Whether you need an <strong className="font-semibold text-text-main font-sans">emergency roof repair Raleigh</strong> or an <strong className="font-semibold text-text-main font-sans">installation</strong> that lasts a lifetime, our team provides the <strong className="font-semibold text-text-main font-sans">trusted</strong> expertise necessary to maintain your home's integrity against the Carolina climate."
            </p>
            
            <div className="mt-8 pt-8 border-t border-stone-300/50 flex items-center justify-between relative z-10">
              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md border border-stone-100">
                  <Award className="text-gold" size={28} />
                </div>
                <div>
                  <p className="font-bold text-text-main uppercase tracking-widest text-sm">A+ Rating</p>
                  <p className="text-stone-500 text-[10px] font-medium tracking-wider">LOCAL INDUSTRY STANDARDS</p>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <div className="flex gap-1 justify-end text-gold mb-1.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-[10px] text-text-muted uppercase tracking-widest font-medium">500+ Verified Reviews</p>
              </div>
            </div>
          </div>

          {/* Text Area (Right on desktop, top on mobile) */}
          <div className="order-1 lg:order-2 relative p-8 md:p-12 lg:p-16 rounded-[3rem] h-full flex flex-col justify-center">
            {/* Abstract Golden Blobs */}
            <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
              <div className="absolute -top-[10%] -left-[10%] w-[80%] h-[80%] bg-gold/50 rounded-full mix-blend-multiply filter blur-[70px]" />
              <div className="absolute top-[10%] -right-[20%] w-[90%] h-[90%] bg-[#E5C158]/40 rounded-full mix-blend-multiply filter blur-[70px]" />
              <div className="absolute -bottom-[10%] left-[10%] w-[70%] h-[70%] bg-[#F5CE56]/30 rounded-full mix-blend-multiply filter blur-[70px]" />
            </div>
            
            {/* Frosted Glass Layer */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-[24px] border border-gold/30 shadow-[0_8px_32px_rgba(194,147,37,0.12)] rounded-[3rem]" />
            
            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-medium mb-6 text-text-main leading-tight">
                The <span className="italic">Triangle's</span> <span className="gold-gradient italic">Trusted</span> Choice.
              </h2>
              <p className="text-lg text-text-muted leading-relaxed font-light mb-8">
                Searching for <strong className="font-semibold text-text-main">top-rated roofing contractors near me</strong>? As the <strong className="font-semibold text-text-main">best roofing company in the Triangle</strong>, Dynamic Roofing NC brings architectural excellence to every shingle. We are your certified <strong className="font-semibold text-text-main">local roof replacement experts</strong>, specializing in premium <strong className="font-semibold text-text-main">residential roofing services</strong>, siding, and seamless gutter installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white/50 shadow-sm transition-transform hover:-translate-y-1">
                  <div className="bg-gold/10 p-2 rounded-lg text-gold">
                    <Shield size={20} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider text-text-main">Certified Pro</span>
                </div>
                <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white/50 shadow-sm transition-transform hover:-translate-y-1">
                  <div className="bg-gold/10 p-2 rounded-lg text-gold">
                    <Star size={20} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider text-text-main">Free Estimates</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
