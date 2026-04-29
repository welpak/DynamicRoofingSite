import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

export interface FeatureSectionProps {
  id: string;
  tagline: string;
  title: string;
  titleHighlight: string;
  description: React.ReactNode;
  features?: React.ReactNode;
  actionButton?: {
    href: string;
    text: string;
  };
  imageSrc: string;
  imageAlt: string;
  imageFirst?: boolean;
  imageBadge?: {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    position?: 'top-right' | 'bottom-left' | 'bottom-right';
  };
  imageOverlayText?: string;
  bgColor?: string;
  bgOverlay?: string;
}

export default function FeatureSection({
  id,
  tagline,
  title,
  titleHighlight,
  description,
  features,
  actionButton,
  imageSrc,
  imageAlt,
  imageFirst = false,
  imageBadge,
  imageOverlayText,
  bgColor = "bg-white",
  bgOverlay
}: FeatureSectionProps) {
  
  const badgePositionClass = {
    'top-right': 'top-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-right': 'bottom-6 right-6'
  }[imageBadge?.position || 'bottom-left'];

  return (
    <section className={`py-16 md:py-24 px-6 ${bgColor} relative overflow-hidden`} id={id}>
      {bgOverlay === 'skew' && (
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 skew-x-12 translate-x-32 hidden md:block" />
      )}
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
        
        {/* Content Side */}
        <div className={imageFirst ? 'order-1 md:order-2' : ''}>
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
            {title} <span className="gold-gradient italic">{titleHighlight}</span>
          </h2>
          
          <div className="text-lg text-text-muted mb-8 leading-relaxed font-light">
            {description}
          </div>

          {features && (
            <div className="mb-10">
              {features}
            </div>
          )}
          
          {actionButton && (
            <a 
              href={actionButton.href} 
              className="inline-block px-8 py-4 bg-text-main text-white rounded-full font-bold hover:bg-gold transition-all shadow-xl shadow-black/10"
            >
              {actionButton.text}
            </a>
          )}
        </div>
        
        {/* Image Side */}
        <div className={`relative ${imageFirst ? 'order-2 md:order-1' : ''}`}>
          {bgOverlay === 'blue-glow' && <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full" />}
          {bgOverlay === 'gold-glow' && <div className="absolute inset-0 bg-gold/10 blur-[100px] rounded-full" />}
          {bgOverlay === 'green-glow' && <div className="absolute inset-0 bg-green-500/5 blur-[100px] rounded-full" />}
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`relative z-10 rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl shadow-black/20 aspect-[4/5] bg-white ${imageBadge?.position ? 'aspect-square' : ''}`}
          >
            <img 
              src={imageSrc} 
              alt={imageAlt} 
              className={`w-full h-full object-cover ${imageOverlayText ? 'object-top' : ''}`}
              referrerPolicy="no-referrer"
            />
            
            {imageBadge && (
              <div className={`absolute ${badgePositionClass} bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg flex items-center gap-4`}>
                <div className="bg-gold/20 p-3 rounded-xl text-gold">
                  <imageBadge.icon size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-main">{imageBadge.title}</p>
                  <p className="text-xs text-text-muted">{imageBadge.subtitle}</p>
                </div>
              </div>
            )}
            
            {imageOverlayText && (
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-display text-2xl font-medium">{imageOverlayText}</p>
              </div>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
