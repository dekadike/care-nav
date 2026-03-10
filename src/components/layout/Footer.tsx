import Link from 'next/link';
import OmatochLogo from '@/components/OmatochLogo';

const footerLinks = [
  { href: '/assessment', label: 'Assessment' },
  { href: '/care-types', label: 'Care Types' },
  { href: '/calaim', label: 'CalAIM' },
  { href: '/resources', label: 'Resources' },
  { href: '/checklist', label: 'Checklist' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row gap-6 md:items-start justify-between">
        <div className="max-w-sm">
          <div className="mb-1">
            <OmatochLogo height={28} inverted />
          </div>
          <p className="text-xs font-semibold text-teal-400 uppercase tracking-widest mt-2 mb-2">
            By We Are Medi-Cal Partners for Senior Care
          </p>
          <p className="text-sm leading-relaxed text-slate-400">
            Helping California families navigate Medi-Cal services, CalAIM programs, and senior care options with clarity and confidence.
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
        © {new Date().getFullYear()} Omatochi Family App · We Are Medi-Cal Partners for Senior Care · For informational purposes only.
      </div>
    </footer>
  );
}
