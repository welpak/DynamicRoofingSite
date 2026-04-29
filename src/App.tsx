import React, { Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-gray-dark">
      <Navbar />
      
      <main>
        <Suspense fallback={
          <div className="h-screen w-full flex items-center justify-center bg-gray-dark">
            <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <Hero />
        </Suspense>
        
        <Services />
        
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[3.5rem] overflow-hidden gold-border shadow-2xl shadow-black/5">
                <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Construction" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 glass-card p-10 w-72">
                <p className="text-5xl font-display font-medium gold-gradient mb-2">15+</p>
                <p className="text-xs font-accent text-text-muted uppercase tracking-[0.2em] leading-relaxed">Years of Architectural Roofing Experience</p>
              </div>
            </div>
            
            <div>
              <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Why Dynamic?</span>
              <h2 className="text-4xl md:text-5xl font-display font-medium mb-8 leading-tight text-text-main">
                Designed for <span className="gold-gradient italic">Resilience.</span> <br />
                Built for Beauty.
              </h2>
              <div className="space-y-8">
                {[
                  { title: 'Premium Materials', desc: 'We only partner with GAF, CertainTeed, and James Hardie for uncompromising quality.' },
                  { title: 'Local Expertise', desc: 'Deep understanding of North Carolina climate patterns and local building codes.' },
                  { title: 'Transparent Pricing', desc: 'No hidden fees. Detailed breakdowns of every shingle and site prep hour.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center shrink-0 text-gold font-bold shadow-md shadow-gold/10">
                      0{i+1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-text-main">{item.title}</h4>
                      <p className="text-text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
