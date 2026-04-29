import React from 'react';
import { Hammer, ArrowRight } from 'lucide-react';
import FeatureSection from '../ui/FeatureSection';

export default function Siding() {
  return (
    <FeatureSection
      id="siding"
      bgColor="bg-white"
      bgOverlay="blue-glow"
      imageFirst={true}
      tagline="Transformative Exteriors"
      title="Elevate Your"
      titleHighlight="Siding."
      description={
        <p>
          When it comes to your home's <strong className="font-semibold text-text-main">exterior</strong>, we are the <strong className="font-semibold text-text-main">best siding contractors near me</strong>. Our team specializes in comprehensive <strong className="font-semibold text-text-main">siding replacement and repair</strong>, delivering a stunning <strong className="font-semibold text-text-main">exterior siding upgrade</strong> that maximizes your home's <strong className="font-semibold text-text-main">curb-appeal</strong>.
          <br/><br/>
          As leading <strong className="font-semibold text-text-main">vinyl siding installation contractors</strong>, we focus on high-quality <strong className="font-semibold text-text-main">vinyl</strong> and advanced <strong className="font-semibold text-text-main">insulation</strong> techniques to provide truly <strong className="font-semibold text-text-main">energy-efficient home siding</strong>. Our meticulous <strong className="font-semibold text-text-main">renovation</strong> process ensures that every panel is perfectly aligned for thermal performance and timeless aesthetics. We don't just replace boards; we redefine your home's protective layer.
        </p>
      }
      features={
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1 bg-gray-50 p-6 rounded-3xl border border-black/5">
            <Hammer className="text-gold mb-4" size={24} />
            <h4 className="font-bold text-text-main mb-2">Premium Materials</h4>
            <p className="text-sm text-text-muted">High-performance siding built to withstand the elements.</p>
          </div>
          <div className="flex-1 bg-gray-50 p-6 rounded-3xl border border-black/5">
            <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold mb-4">
              $
            </div>
            <h4 className="font-bold text-text-main mb-2">Energy Savings</h4>
            <p className="text-sm text-text-muted">Advanced insulation options that lower your energy bills.</p>
          </div>
        </div>
      }
      actionButton={{ href: "#contact", text: "Discover Siding Options" }}
      imageSrc="https://dynamic-roofing-nc.com/media/photo/vinyl.png"
      imageAlt="Beautiful house siding"
    />
  );
}
