import React from 'react';
import { ClipboardCheck, Search } from 'lucide-react';
import FeatureSection from '../ui/FeatureSection';

export default function Inspections() {
  return (
    <FeatureSection
      id="inspections"
      bgColor="bg-white"
      bgOverlay="skew"
      imageFirst={true}
      tagline="Preventative Care"
      title="Thorough"
      titleHighlight="Inspections."
      description={
        <p>
          Don't let minor issues become costly damage. Claim your <strong className="font-semibold text-text-main">free roof inspection</strong> today. We offer a <strong className="font-semibold text-text-main">professional roof evaluation</strong> and an incredibly <strong className="font-semibold text-text-main">comprehensive roof checkup</strong> to ensure your home is fully protected. Our team leaves no stone unturned during the <strong className="font-semibold text-text-main">evaluation</strong> process.
          <br/><br/>
          Whether you need a <strong className="font-semibold text-text-main">real estate roof inspection</strong> before selling or a detailed <strong className="font-semibold text-text-main">storm damage roof assessment</strong>, our <strong className="font-semibold text-text-main">certified</strong> experts provide a <strong className="font-semibold text-text-main">free</strong>, detailed <strong className="font-semibold text-text-main">assessment</strong>. Trust our <strong className="font-semibold text-text-main">comprehensive evaluation</strong> to catch hidden structural vulnerabilities that others might miss, giving you absolute peace of mind.
        </p>
      }
      features={
        <div className="bg-gray-50 rounded-3xl p-8 border border-black/5">
          <h4 className="font-display font-medium text-2xl text-text-main mb-6">What We Check:</h4>
          <ul className="space-y-4">
            {[
              'Shingle condition and granular loss',
              'Flashing around chimneys and vents',
              'Attic ventilation and moisture levels',
              'Gutter system flow and structural integrity'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <ClipboardCheck size={20} className="text-gold mt-1 shrink-0" />
                <span className="text-text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      }
      actionButton={{ href: "#contact", text: "Book Free Inspection" }}
      imageSrc="https://dynamic-roofing-nc.com/media/photo/inspectDR.jpeg"
      imageAlt="Professional Roof Inspection"
      imageBadge={{
        icon: Search,
        title: "100% Free",
        subtitle: "No Obligations",
        position: "bottom-left"
      }}
    />
  );
}
