import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

export interface SplitSectionProps {
  id: string;
  imageSrc: string;
  imageAlt: string;
  imageFirst?: boolean;
  tagline: string;
  titleLight: string;
  titleBold: string;
  description: React.ReactNode;
  additionalContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  badge?: {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    position?: 'top-right' | 'bottom-left' | 'bottom-right';
  };
  bgColor?: string;
}

export default function SplitSection({
  id,
  imageSrc,
  imageAlt,
  imageFirst = true,
  tagline,
  titleLight,
  titleBold,
  description,
  additionalContent,
  footerContent,
  badge,
  bgColor = "bg-white"
}: SplitSectionProps) {
  
  const badgePositionClass = {
    'top-right': 'top-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-right': 'bottom-6 right-6'
  }[badge?.position || 'bottom-left'];

  return (
    <section className={`py-16 md:py-24 px-6 ${bgColor} relative overflow-hidden`} id={id}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        <div className={`relative ${imageFirst ? 'order-2 md:order-1' : 'order-2 md:order-2'}`}>
          <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full" />
          <motion.div 
            initial={{ opacity: 0, x: imageFirst ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10 rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl aspect-[4/5] object-cover"
          >
            <img 
              src={imageSrc} 
              alt={imageAlt} 
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
            {badge && (
              <div className={`absolute ${badgePositionClass} bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg flex items-center gap-4`}>
                <div className="bg-gold/20 p-3 rounded-xl text-gold">
                  <badge.icon size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-main">{badge.title}</p>
                  <p className="text-xs text-text-muted">{badge.subtitle}</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        <div className={imageFirst ? 'order-1 md:order-2' : 'order-1 md:order-1'}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-gold/50" />
            <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs">{tagline}</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-8 leading-tight text-text-main">
            {titleLight} <span className="gold-gradient italic">{titleBold}</span>
          </h2>
          
          <div className="text-lg text-text-muted mb-8 leading-relaxed font-light">
            {description}
          </div>

          {additionalContent && (
             <div className="mb-10">
               {additionalContent}
             </div>
          )}
          
          {footerContent}
        </div>
      </div>
    </section>
  );
}
