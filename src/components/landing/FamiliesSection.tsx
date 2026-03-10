import { Quote } from 'lucide-react';

const families = [
  {
    photoId: 'photo-1573497161161-c3e73707e25c',
    alt: 'Smiling Latina grandmother with warm, welcoming expression',
    name: 'Maria G., 78',
    location: 'Los Angeles County',
    program: 'IHSS + CalAIM ECM',
    quote:
      "We didn't know my mother qualified for IHSS. Omatochi helped us apply and find a CalAIM care manager — now she gets 35 hours of in-home care each week.",
    programColor: 'bg-teal-100 text-teal-700',
  },
  {
    photoId: 'photo-1551649001-7a2482d98d05',
    alt: 'Senior African American couple smiling together outdoors',
    name: 'James & Ruth D.',
    location: 'San Diego County',
    program: 'Medi-Cal + MSSP',
    quote:
      "After James's stroke we were overwhelmed. The assessment showed we qualified for MSSP — now a case manager coordinates everything so we can focus on each other.",
    programColor: 'bg-blue-100 text-blue-700',
  },
  {
    photoId: 'photo-1609220136736-443140cfeaa1',
    alt: 'Multigenerational Asian family together, grandparent with grandchildren',
    name: 'The Chen Family',
    location: 'Santa Clara County',
    program: 'PACE Program',
    quote:
      "PACE meant grandma could stay home instead of a nursing facility. The all-in-one Medi-Cal and Medicare coverage simplified everything for our whole family.",
    programColor: 'bg-violet-100 text-violet-700',
  },
];

export default function FamiliesSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-2">
          Real Families · Real Results
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
          Helping California families navigate senior care
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto">
          Families across California use Omatochi to find Medi-Cal benefits, enroll in IHSS, and connect with CalAIM care managers — often for the first time.
        </p>
      </div>

      {/* Family cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {families.map((family) => (
          <div
            key={family.name}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            {/* Photo */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={`https://images.unsplash.com/${family.photoId}?auto=format&fit=crop&w=600&q=80`}
                alt={family.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
              {/* Program badge overlaid on photo */}
              <div className="absolute bottom-3 left-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${family.programColor} shadow-sm`}>
                  {family.program}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-start gap-2 mb-3">
                <Quote className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <p className="text-slate-600 text-sm leading-relaxed italic">{family.quote}</p>
              </div>
              <div className="border-t border-slate-100 pt-3 mt-3">
                <p className="font-semibold text-slate-800 text-sm">{family.name}</p>
                <p className="text-slate-400 text-xs">{family.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
