import { LinkButton } from '@/components/ui/Button';
import { ArrowRight, ClipboardList, Heart } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-700 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-16 -right-16 w-96 h-96 rounded-full bg-white" />
        <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-white" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-4 h-4 fill-teal-200 text-teal-200" />
            <p className="text-teal-200 font-semibold text-sm uppercase tracking-widest">
              We Are Medi-Cal Partners for Senior Care
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Your Family&apos;s Guide to Medi-Cal &amp; Senior Care in California
          </h1>
          <p className="text-teal-100 text-lg leading-relaxed mb-4 max-w-xl">
            Navigating Medi-Cal, CalAIM, and senior care options is complex. We make it simple — with personalized guidance, California-specific resources, and expert support every step of the way.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {['CalAIM Community Supports', 'IHSS', 'MSSP', 'PACE', 'Medi-Cal Enrollment'].map((tag) => (
              <span key={tag} className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <LinkButton href="/assessment" size="lg" variant="secondary" className="group">
              <ClipboardList className="w-5 h-5" />
              Start Assessment
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </LinkButton>
            <LinkButton
              href="/calaim"
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/20 border border-white/30"
            >
              Explore CalAIM Services
              <ArrowRight className="w-4 h-4" />
            </LinkButton>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>
  );
}
