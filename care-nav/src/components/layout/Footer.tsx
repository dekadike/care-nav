import Link from 'next/link';
import { Heart } from 'lucide-react';

const footerLinks = [
  { href: '/assessment', label: 'Assessment' },
  { href: '/care-types', label: 'Care Types' },
  { href: '/resources', label: 'Resources' },
  { href: '/checklist', label: 'Checklist' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row gap-6 md:items-start justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 font-bold text-lg text-white mb-2">
            <Heart className="w-4 h-4 fill-teal-400 text-teal-400" />
            CareNav
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Helping families navigate elder care options with clarity and confidence.
          </p>
          <p className="text-xs text-slate-500 mt-3">
            This tool provides general information only — not medical, legal, or financial advice. Always consult qualified professionals for your specific situation.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Navigation</p>
          <ul className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-slate-700 py-4 text-center text-xs text-slate-600 px-4">
        © {new Date().getFullYear()} CareNav. For informational purposes only.
      </div>
    </footer>
  );
}
