import Link from 'next/link';
import { ArrowRight, CheckCircle, Heart, Home, Star, Users } from 'lucide-react';
import { calaimServices } from '@/data/calaimServices';

export const metadata = {
  title: 'CalAIM & Medi-Cal Services | Omatochi Family App',
  description:
    'Learn about CalAIM Enhanced Care Management, Community Supports, IHSS, MSSP, and PACE — California Medi-Cal programs for seniors and families.',
};

const typeLabels: Record<string, string> = {
  ecm: 'Enhanced Care Management',
  'community-support': 'Community Support',
  program: 'Medi-Cal Program',
};

const typeColors: Record<string, string> = {
  ecm: 'bg-teal-100 text-teal-700',
  'community-support': 'bg-blue-100 text-blue-700',
  program: 'bg-violet-100 text-violet-700',
};

export default function CalAIMPage() {
  const ecm = calaimServices.filter((s) => s.type === 'ecm');
  const supports = calaimServices.filter((s) => s.type === 'community-support');
  const programs = calaimServices.filter((s) => s.type === 'program');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-teal-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal-300 text-sm font-semibold tracking-widest uppercase mb-3">
            We Are Medi-Cal Partners for Senior Care
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            CalAIM & Medi-Cal Services
          </h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto mb-8">
            California&apos;s Medi-Cal program offers life-changing services for seniors and families.
            Learn what&apos;s available, who qualifies, and how to get enrolled.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors"
            >
              Check Eligibility <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 border border-teal-400 text-white px-6 py-3 rounded-xl hover:bg-teal-600 transition-colors"
            >
              Find Local Resources
            </Link>
          </div>
        </div>
      </section>

      {/* What is CalAIM */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <div className="bg-white rounded-2xl border border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">What is CalAIM?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            <strong>CalAIM</strong> (California Advancing and Innovating Medi-Cal) is a major initiative
            by the California Department of Health Care Services (DHCS) to transform and strengthen
            Medi-Cal — California&apos;s Medicaid program — so it better serves people with complex health
            and social needs.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            CalAIM introduces two key benefits that can help seniors and families get more support:
            <strong> Enhanced Care Management (ECM)</strong> and <strong>Community Supports</strong> —
            services that address not just medical needs, but housing, nutrition, transportation, and more.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Heart, label: 'Whole-person care', desc: 'Addresses medical, social, and behavioral health needs together' },
              { icon: Home, label: 'Stay at home longer', desc: 'Services designed to help seniors live safely in their community' },
              { icon: Users, label: 'Family support', desc: 'Caregiver respite and coordination so families don\'t burn out' },
            ].map((item) => (
              <div key={item.label} className="bg-teal-50 rounded-xl p-4">
                <item.icon className="w-6 h-6 text-teal-600 mb-2" />
                <p className="font-semibold text-slate-800 text-sm mb-1">{item.label}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Care Management */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Star className="w-6 h-6 text-teal-600" /> Enhanced Care Management (ECM)
        </h2>
        {ecm.map((service) => (
          <div key={service.id} className="bg-white rounded-2xl border border-teal-200 p-8 mb-6">
            <div className="flex items-start gap-4">
              <span className="text-4xl">{service.icon}</span>
              <div className="flex-1">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${typeColors[service.type]} mb-3 inline-block`}>
                  {typeLabels[service.type]}
                </span>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{service.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-5">{service.description}</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">Who qualifies:</p>
                    <ul className="space-y-1">
                      {service.whoQualifies.map((q, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-sm font-semibold text-slate-700 mb-1">How to access:</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{service.howToAccess}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Community Supports */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Community Supports</h2>
        <p className="text-slate-500 mb-6">
          Optional services that Medi-Cal managed care plans may offer to address social needs that impact health.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {supports.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{service.icon}</span>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${typeColors[service.type]}`}>
                  {typeLabels[service.type]}
                </span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">{service.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.description}</p>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Who qualifies:</p>
                <ul className="space-y-1">
                  {service.whoQualifies.map((q, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-500 mt-0.5 shrink-0" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Programs: IHSS, MSSP, PACE */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Key Medi-Cal Programs for Seniors</h2>
        <p className="text-slate-500 mb-6">
          Long-standing California programs that provide critical support for older adults.
        </p>
        <div className="space-y-5">
          {programs.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl border border-slate-200 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">{service.icon}</span>
                <div className="flex-1">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${typeColors[service.type]} mb-3 inline-block`}>
                    {typeLabels[service.type]}
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{service.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Who qualifies:</p>
                      <ul className="space-y-1">
                        {service.whoQualifies.map((q, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-sm text-slate-600">
                            <CheckCircle className="w-3.5 h-3.5 text-teal-500 mt-0.5 shrink-0" />
                            {q}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">How to access:</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{service.howToAccess}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-teal-700 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to get started?</h2>
          <p className="text-teal-200 mb-6">
            Take our free assessment to find out which Medi-Cal services your loved one may qualify for.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors"
            >
              Start Free Assessment <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/checklist"
              className="inline-flex items-center gap-2 border border-teal-400 text-white px-6 py-3 rounded-xl hover:bg-teal-600 transition-colors"
            >
              View Care Checklist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
