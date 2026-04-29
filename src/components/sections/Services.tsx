import React from 'react';
import { motion } from 'motion/react';
import { Shield, Hammer, Droplets, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: 'roofing',
    title: 'Roofing Excellence',
    description: 'Expert residential roofing installation, master-grade repairs, and precision storm damage remediation. We use only the finest architectural shingles.',
    icon: <Shield size={32} className="text-gold" />,
    image: 'https://images.unsplash.com/photo-1635831968430-8456a004bd57?auto=format&fit=crop&q=80&w=800',
    color: 'bg-gold/10'
  },
  {
    id: 'siding',
    title: 'Modern Siding',
    description: 'Elevate your curb appeal with premium siding. From vinyl to high-performance fiber cement, we provide protection that lasts a lifetime.',
    icon: <Hammer size={32} className="text-gold" />,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    color: 'bg-blue-500/10'
  },
  {
    id: 'gutters',
    title: 'Precision Gutters',
    description: 'Seamless gutter systems and advanced protection. Engineered to shield your foundation and landscaping from North Carolina storm water.',
    icon: <Droplets size={32} className="text-gold" />,
    image: 'https://images.unsplash.com/photo-1621255866179-8f0a0d922904?auto=format&fit=crop&q=80&w=800',
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
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[500px] rounded-[3rem] overflow-hidden bg-gray-50 border border-black/5 cursor-pointer shadow-xl shadow-black/[0.03] hover:shadow-2xl hover:shadow-black/[0.08] transition-all duration-500"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent p-10 flex flex-col justify-end">
                <div className="mb-6 w-16 h-16 rounded-2xl bg-white border border-black/5 flex items-center justify-center shadow-lg shadow-black/[0.05] group-hover:bg-gold transition-colors">
                  <div className="group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-display font-medium mb-4 text-text-main">{service.title}</h3>
                <p className="text-text-muted leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {service.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-gold font-bold text-sm uppercase tracking-widest overflow-hidden">
                  <span className="translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500">Explore Service</span>
                  <ArrowUpRight size={18} className="translate-x-[-150%] group-hover:translate-x-0 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
