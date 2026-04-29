import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import SEOTrustSection from './components/sections/SEOTrustSection';
import Services from './components/sections/Services';
import Roofing from './components/sections/Roofing';
import Siding from './components/sections/Siding';
import Gutters from './components/sections/Gutters';
import Inspections from './components/sections/Inspections';
import Reviews from './components/sections/Reviews';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';

// A simple About Page placeholder for now
function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[70vh] flex flex-col justify-center items-center bg-gray-50">
      <h1 className="text-5xl font-display font-medium mb-6 text-text-main">
        About <span className="gold-gradient italic">Dynamic Roofing.</span>
      </h1>
      <p className="text-text-muted max-w-2xl text-center leading-relaxed text-lg">
        We are North Carolina's premier architectural roofing and exterior contractor. 
        Dedicated to serving our community with uncompromising quality, resilient materials, 
        and exceptional craftsmanship.
      </p>
    </div>
  );
}

function HomePage() {
  return (
    <main>
      <Suspense fallback={
        <div className="h-screen w-full flex items-center justify-center bg-gray-dark">
          <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <Hero />
      </Suspense>
      
      <SEOTrustSection />
      
      <Services />
      <Roofing />
      <Siding />
      <Gutters />
      <Inspections />
      <Reviews />
      
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative aspect-square rounded-[3.5rem] overflow-hidden gold-border">
              <img 
                src="https://dynamic-roofing-nc.com/media/photo/obxHouse.png" 
                alt="Modern Construction" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent shadow-[inset_0_10px_40px_rgba(0,0,0,0.2)]" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#E5C158]/40 backdrop-blur-xl border border-[#E5C158]/40 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-10 w-72">
              <p className="text-5xl font-display font-medium text-stone-900 mb-2">15+</p>
              <p className="text-xs font-accent text-stone-900 font-semibold uppercase tracking-[0.2em] leading-relaxed">Years of Architectural Roofing Experience</p>
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
  );
}

// Scroll restoration component to handle # hash links on navigation
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen selection:bg-gold selection:text-gray-dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
