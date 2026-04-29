import React from 'react';
import { Droplets } from 'lucide-react';
import FeatureSection from '../ui/FeatureSection';

export default function Gutters() {
  return (
    <FeatureSection
      id="gutters"
      bgColor="bg-gray-50"
      bgOverlay="green-glow"
      tagline="Unmatched Protection"
      title="Precision"
      titleHighlight="Gutters."
      description={
        <p>
          If you need <strong className="font-semibold text-text-main">seamless gutter installation near me</strong>, look no further. We are <strong className="font-semibold text-text-main">local gutter installers</strong> dedicated to safeguarding your home with <strong className="font-semibold text-text-main">custom rain gutter systems</strong>. Our <strong className="font-semibold text-text-main">seamless</strong> designs ensure optimal <strong className="font-semibold text-text-main">drainage</strong> to protect your foundation from costly water damage.
          <br/><br/>
          Whether you are looking for <strong className="font-semibold text-text-main">gutter repair and replacement</strong> or complete <strong className="font-semibold text-text-main">clogged gutter solutions</strong>, our heavy-duty <strong className="font-semibold text-text-main">downspouts</strong> and leaf <strong className="font-semibold text-text-main">guards</strong> prevent <strong className="font-semibold text-text-main">clogs</strong> before they ever happen. We engineer every system to manage the heaviest Carolina downpours, ensuring water is channeled safely away from your home's most vulnerable structures.
        </p>
      }
      features={
        <div className="grid grid-cols-2 gap-4">
          {['Custom Seamless Fit', 'Leaf Guard Protection', 'Heavy-Duty Fixings', 'Foundation Defense'].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-4 bg-white rounded-2xl shadow-sm border border-black/5">
              <Droplets size={16} className="text-gold shrink-0" />
              <span className="text-sm font-bold text-text-main">{item}</span>
            </div>
          ))}
        </div>
      }
      actionButton={{ href: "#contact", text: "Get a Gutter Estimate" }}
      imageSrc="https://dynamic-roofing-nc.com/media/photo/gutterRoof.png"
      imageAlt="Custom Rain Gutters"
      imageOverlayText="Engineered for the Carolinas."
    />
  );
}
