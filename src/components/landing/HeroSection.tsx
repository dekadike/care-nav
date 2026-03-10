import { LinkButton } from '@/components/ui/Button';
import { ArrowRight, ClipboardList, Heart } from 'lucide-react';

const collagePhotos = [
  {
    id: 'photo-1576765608535-5f04d1e3f289',
    alt: 'Smiling elderly woman in a colorful outfit enjoying time outdoors',
  },
  {
    id: 'photo-1559757175-5700dde675bc',
    alt: 'Senior couple smiling together outdoors in California sunshine',
  },
  {
    id: 'photo-1582750433449-648ed127bb54',
    alt: 'Caregiver warmly helping an elderly family member at home',
  },
];

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-700 text-white overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-16 -right-16 w-96 h-96 rounded-full bg-white" />
        <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-white" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-24">
        <div className="flex items-center gap-12">

          {/* Left: Text content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-4 h-4 fill-teal-200 text-teal-200" />
              <p className="text-teal-200 font-semibold text-sm uppercase tracking-widest">
                Holistic, Family-Focused Senior Care · California Medi-Cal Partners
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              A Smarter Way for Your Loved Ones to Age in Place
            </h1>
            <p className="text-teal-100 text-lg leading-relaxed mb-4 max-w-xl">
              Our holistic approach addresses your senior&apos;s physical, mental, and social needs — while helping your family navigate Medi-Cal, CalAIM, IHSS, and every California care option available to them.
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

          {/* Right: Photo collage — hidden on mobile, shown md+ */}
          <div className="hidden md:flex flex-col gap-3 w-80 lg:w-96 shrink-0">
            {/* Large top photo */}
            <img
              src={`https://images.unsplash.com/${collagePhotos[0].id}?auto=format&fit=crop&w=700&q=80`}
              alt={collagePhotos[0].alt}
              loading="eager"
              decoding="async"
              className="w-full h-44 lg:h-52 object-cover rounded-2xl shadow-lg"
            />
            {/* Two smaller bottom photos */}
            <div className="flex gap-3">
              {collagePhotos.slice(1).map((photo) => (
                <img
                  key={photo.id}
                  src={`https://images.unsplash.com/${photo.id}?auto=format&fit=crop&w=350&q=80`}
                  alt={photo.alt}
                  loading="eager"
                  decoding="async"
                  className="w-[48%] h-28 object-cover rounded-xl shadow-md"
                />
              ))}
            </div>
            {/* Caption */}
            <p className="text-teal-200 text-xs text-center italic">
              Real families. Real support. Real California.
            </p>
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
