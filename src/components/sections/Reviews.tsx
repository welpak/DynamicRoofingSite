import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    text: "Dynamic Roofing NC did an incredible job replacing our storm-damaged roof. Their team was professional, the estimate was transparent, and the finished architectural shingles look stunning.",
    author: "Sarah Jenkins",
    location: "Raleigh, NC"
  },
  {
    text: "We hired them for seamless gutter installation and siding replacement. Not only is our home more energy-efficient now, but the curb appeal is completely transformed. Highly recommend!",
    author: "Mark & Linda T.",
    location: "Durham, NC"
  },
  {
    text: "The free roof inspection was extremely thorough. They found a minor leak around our chimney that we hadn't noticed and fixed it the same day. True professionals.",
    author: "David R.",
    location: "Cary, NC"
  }
];

export default function Reviews() {
  return (
    <section className="py-24 px-6 text-white relative overflow-hidden" id="reviews">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" 
          alt="Home exterior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/75 backdrop-blur-[4px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-gold/50" />
            <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs">Client Success</span>
            <div className="h-[1px] w-12 bg-gold/50" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
            Trusted by NC <span className="gold-gradient italic">Homeowners.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-stone-900/40 backdrop-blur-lg border border-white/10 p-10 rounded-[3rem] relative shadow-2xl"
            >
              <Quote size={40} className="text-gold/20 mb-6" />
              <div className="flex gap-1 mb-6 text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-stone-300 leading-relaxed mb-8 italic">"{review.text}"</p>
              <div>
                <p className="font-bold text-white text-lg">{review.author}</p>
                <p className="text-gold text-sm uppercase tracking-wider">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
    </section>
  );
}
