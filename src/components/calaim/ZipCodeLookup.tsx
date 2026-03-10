'use client';

import { useState } from 'react';
import { MapPin, Phone, ExternalLink, Search, AlertCircle, Building2, HeartHandshake } from 'lucide-react';
import { getCountyFromZip, countyData, type CountyInfo } from '@/data/caCountyPlans';

export default function ZipCodeLookup() {
  const [zip, setZip] = useState('');
  const [result, setResult] = useState<CountyInfo | null>(null);
  const [notFound, setNotFound] = useState(false);

  function handleSearch() {
    const county = getCountyFromZip(zip.trim());
    if (county && countyData[county]) {
      setResult(countyData[county]);
      setNotFound(false);
    } else {
      setResult(null);
      setNotFound(true);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') handleSearch();
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8">
      {/* Search bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            inputMode="numeric"
            maxLength={5}
            placeholder="Enter your ZIP code (e.g. 90210)"
            value={zip}
            onChange={(e) => {
              setZip(e.target.value.replace(/\D/g, ''));
              setNotFound(false);
              setResult(null);
            }}
            onKeyDown={handleKeyDown}
            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <button
          onClick={handleSearch}
          className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-teal-700 transition-colors"
        >
          <Search className="w-4 h-4" />
          Find Resources
        </button>
      </div>

      {/* Not found */}
      {notFound && (
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
          <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-800">County not found for ZIP {zip}</p>
            <p className="text-sm text-amber-700 mt-1">
              Try a different ZIP, or call <strong>Medi-Cal directly at 1-800-300-1506</strong> to find your county&apos;s plans and IHSS office.
            </p>
          </div>
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <MapPin className="w-5 h-5 text-teal-600" />
            <h3 className="text-lg font-bold text-slate-800">{result.county} County Resources</h3>
          </div>

          {/* IHSS Office */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="w-4 h-4 text-teal-600" />
              <h4 className="font-semibold text-slate-700">IHSS County Office</h4>
            </div>
            <div className="bg-teal-50 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-slate-800">{result.county} County IHSS</p>
                <p className="text-sm text-slate-500">Apply for in-home care hours and provider enrollment</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <a
                  href={`tel:${result.ihssPhone}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 bg-white border border-teal-200 px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> {result.ihssPhone}
                </a>
                <a
                  href={result.ihssWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-teal-600 px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Apply Online <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Medi-Cal Plans */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <HeartHandshake className="w-4 h-4 text-teal-600" />
              <h4 className="font-semibold text-slate-700">Medi-Cal Managed Care Plans in Your County</h4>
            </div>
            <p className="text-sm text-slate-500 mb-3">
              Contact your plan to request <strong>CalAIM Enhanced Care Management (ECM)</strong> or <strong>Community Supports</strong>. If you&apos;re not yet enrolled, any of these plans can help you sign up for Medi-Cal.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {result.plans.map((plan) => (
                <div key={plan.name} className="border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                  <p className="font-semibold text-slate-800 text-sm">{plan.name}</p>
                  <div className="flex gap-2 flex-wrap">
                    <a
                      href={`tel:${plan.phone}`}
                      className="inline-flex items-center gap-1 text-xs font-medium text-teal-700 hover:underline"
                    >
                      <Phone className="w-3 h-3" /> {plan.phone}
                    </a>
                    <a
                      href={plan.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-teal-700 hover:underline"
                    >
                      Website <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Omatochi CTA */}
          <div className="bg-teal-700 text-white rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold mb-1">Need help navigating these options?</p>
              <p className="text-teal-200 text-sm">Omatochi&apos;s care navigators can help you enroll, choose a plan, and request CalAIM services in {result.county} County.</p>
            </div>
            <a
              href="https://www.omatochi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-teal-50 transition-colors text-sm"
            >
              Contact Omatochi <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {/* Default state */}
      {!result && !notFound && (
        <p className="text-sm text-slate-400 text-center py-4">
          Enter your ZIP code above to find Medi-Cal plans, IHSS offices, and CalAIM providers in your county.
        </p>
      )}
    </div>
  );
}
