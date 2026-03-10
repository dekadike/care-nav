interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  photoId: string;
  photoAlt: string;
}

export default function PageHero({ eyebrow, title, subtitle, photoId, photoAlt }: PageHeroProps) {
  const src = `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1400&q=80`;

  return (
    <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
      {/* Background photo */}
      <img
        src={src}
        alt={photoAlt}
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient overlay: strong on left, fades right */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/70 to-teal-700/30" />

      {/* Text content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
          {eyebrow && (
            <p className="text-teal-300 font-semibold text-xs uppercase tracking-widest mb-2">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
