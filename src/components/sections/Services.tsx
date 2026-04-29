import React from 'react';
import { motion } from 'motion/react';
import { Shield, Hammer, Droplets, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: 'roofing',
    title: 'Roofing Excellence',
    description: 'Expert residential roofing installation, master-grade repairs, and precision storm damage remediation. We use only the finest architectural shingles.',
    icon: Shield,
    image: 'https://dynamic-roofing-nc.com/media/photo/mroof1_2.webp?auto=format&fit=crop&q=80&w=800',
    color: 'bg-gold/10'
  },
  {
    id: 'siding',
    title: 'Modern Siding',
    description: 'Elevate your curb appeal with premium siding. From vinyl to high-performance fiber cement, we provide protection that lasts a lifetime.',
    icon: Hammer,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    color: 'bg-blue-500/10'
  },
  {
    id: 'gutters',
    title: 'Precision Gutters',
    description: 'Seamless gutter systems and advanced protection. Engineered to shield your foundation and landscaping from North Carolina storm water.',
    icon: Droplets,
    image: 'https://dynamic-roofing-nc.com/media/photo/Gutters_2.webp?auto=format&fit=crop&q=80&w=800',
    color: 'bg-green-500/10'
  }
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-white" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-gold/50" />
            <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs">Our Expertise</span>
            <div className="h-[1px] w-12 bg-gold/50" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-medium mb-6 text-text-main text-balance">Master Craftsmanship.</h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            From the first shingle to the final gutter downspout, we bring a level of detail 
            unmatched in the NC Piedmont region.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3, margin: "-25% 0px -25% 0px" }}
                className="relative h-[500px] rounded-[3rem] overflow-hidden bg-zinc-900 shadow-xl shadow-black/[0.03]"
              >
                <motion.img 
                  src={service.image} 
                  alt={service.title} 
                  variants={{
                    hidden: { filter: 'grayscale(100%)', scale: 1 },
                    visible: { filter: 'grayscale(0%)', scale: 1.05, transition: { duration: 0.7, ease: "easeOut" } }
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Granite Gray Frosted Overlay */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0.9, backdropFilter: 'blur(10px)' },
                    visible: { opacity: 0.2, backdropFilter: 'blur(2px)', transition: { duration: 0.7, ease: "easeOut" } }
                  }}
                  className="absolute inset-0 bg-stone-800"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-transparent p-10 flex flex-col justify-end pointer-events-none z-10" />

                <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                  <motion.div 
                    variants={{
                      hidden: { backgroundColor: '#ffffff' },
                      visible: { backgroundColor: '#E5C158', transition: { duration: 0.5 } }
                    }}
                    className="mb-6 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-black/[0.05]"
                  >
                    <motion.div
                      variants={{
                        hidden: { color: '#E5C158' },
                        visible: { color: '#4a4a4a', transition: { duration: 0.5 } } // granite gray
                      }}
                    >
                      <Icon size={32} />
                    </motion.div>
                  </motion.div>
                  
                  <motion.h3 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    className="text-3xl font-display font-medium mb-4 text-white"
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
                    }}
                    className="text-stone-300 leading-relaxed"
                  >
                    {service.description}
                  </motion.p>
                  
                  <motion.a 
                    href={`#${service.id}`}
                    className="mt-8 flex items-center gap-2 text-gold font-bold text-sm uppercase tracking-widest overflow-hidden hover:text-white transition-colors"
                  >
                    <motion.span 
                      variants={{
                        hidden: { x: '-100%' },
                        visible: { x: '0%', transition: { duration: 0.5, delay: 0.2 } }
                      }}
                    >
                      Explore Service
                    </motion.span>
                    <motion.div 
                      variants={{
                        hidden: { x: '-150%' },
                        visible: { x: '0%', transition: { duration: 0.5, delay: 0.2 } }
                      }}
                    >
                      <ArrowUpRight size={18} />
                    </motion.div>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
