import HeroSection from '@/components/landing/HeroSection';
import FeatureCards from '@/components/landing/FeatureCards';
import { LinkButton } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeatureCards />

      {/* CTA strip */}
      <section className="bg-teal-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-1">Not sure where to start?</h2>
            <p className="text-teal-200 text-sm">Take our 5-question assessment and get personalized recommendations in under 3 minutes.</p>
          </div>
          <LinkButton href="/assessment" variant="secondary" size="lg" className="shrink-0 group">
            Start the Assessment
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </LinkButton>
        </div>
      </section>
    </div>
  );
}
