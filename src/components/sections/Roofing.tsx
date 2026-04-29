import React from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';
import FeatureSection from '../ui/FeatureSection';

export default function Roofing() {
  return (
    <FeatureSection
      id="roofing"
      bgColor="bg-gray-50"
      bgOverlay="gold-glow"
      tagline="Excellence Above All"
      title="Superior"
      titleHighlight="Roofing."
      description={
        <p>
          When you're searching for <strong className="font-semibold text-text-main">affordable roof replacement</strong>, compromise should never be an option. Whether you are addressing <strong className="font-semibold text-text-main">storm damage roof repair</strong> or you need a trusted local expert for <strong className="font-semibold text-text-main">roof leak repair near me</strong>, our team provides solutions built for unmatched durability. 
          <br/><br/>
          Don't ignore the <strong className="font-semibold text-text-main">signs you need a new roof</strong>. From missing <strong className="font-semibold text-text-main">shingles</strong> to an active <strong className="font-semibold text-text-main">leak</strong>, our comprehensive <strong className="font-semibold text-text-main">asphalt shingle roof replacement</strong> process guarantees the long-term protection your home deserves. We handle every detail of the <strong className="font-semibold text-text-main">replacement</strong> process with surgical precision, ensuring your investment is protected by the industry's highest standards of <strong className="font-semibold text-text-main">durability</strong> and safety.
        </p>
      }
      features={
        <div className="space-y-4">
          {[
            'Premium Asphalt Shingles',
            'Fast & Reliable Repair',
            'Total Roof Replacement',
            'Maximum Durability'
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-gold" />
              <span className="text-text-main font-medium">{item}</span>
            </div>
          ))}
        </div>
      }
      actionButton={{ href: "#contact", text: "Schedule a Repair" }}
      imageSrc="https://dynamic-roofing-nc.com/media/photo/lakeside.png"
      imageAlt="Professional Roof Replacement"
      imageBadge={{
        icon: Shield,
        title: "Certified",
        subtitle: "Installation",
        position: "top-right"
      }}
    />
  );
}
